"use client";

import postUser from "@/apis/user/postUser";
import Button from "@/components/common/Button";
import Checkbox from "@/components/common/Checkbox";
import Topbar from "@/components/common/Topbar";
import ProgressBar from "@/components/signin/ProgressBar";
import Subtitle from "@/components/signin/Subtitle";
import { AllergyCategories, AllergyEnum } from "@/data/allergyData";
import { PostUserRequest } from "@/interface/Auth";
import { setUser } from "@/redux/slices/userSlice";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const CONTEXT1 = "마지막 단계에요!";
const CONTEXT2 = "알레르기 정보 설정은 나중에 바꿀 수 있어요.";
const TITLE = "자녀의 알레르기 유발 식재료가 \n 있다면, 체크해주세요.";

const SigninProcess4 = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const auth = useSelector((state: RootState) => state.auth);
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>(
    {}
  );

  const handleCheckboxChange = (item: string) => {
    setCheckedItems((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  const handleNextButtonClick = () => {
    const updateChildren = user.children.map((child) => ({
      ...child,
      allergies: Object.keys(checkedItems)
        .filter((key) => checkedItems[key])
        .map((key) => AllergyEnum[key as keyof typeof AllergyEnum]),
    }));

    dispatch(
      setUser({
        ...user,
        updateChildren,
      })
    );

    const User: PostUserRequest = {
      registrationToken: `Bearer ${auth.registerToken}`,
      agreement: user.agreement,
      phoneNumber: user.phoneNumber,
      children: updateChildren,
    };

    postUser(User);
    router.push("/signin/completion");
  };

  return (
    <Container>
      <Topbar text="회원가입" />
      <ProgressBar rate={90} />
      <Context>{CONTEXT1}</Context>
      <Title>{TITLE}</Title>
      <Context>{CONTEXT2}</Context>

      <ContentBox>
        {AllergyCategories.map((category) => (
          <div key={category.name}>
            <Subtitle>{category.name}</Subtitle>
            <CheckboxBox>
              {category.items.map((item) => (
                <Checkbox
                  key={item}
                  label={item}
                  checkboxType="checkBtn"
                  checked={checkedItems[item] || false}
                  onChange={() => handleCheckboxChange(item)}
                />
              ))}
            </CheckboxBox>
          </div>
        ))}
      </ContentBox>
      <Button text="다음" onClick={handleNextButtonClick} />
    </Container>
  );
};

export default SigninProcess4;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
  padding: 20px;
`;

const Title = styled.div`
  ${({ theme }) => theme.fonts.heading2_b};
  color: ${({ theme }) => theme.colors.b700};
  margin: 12px 0;
`;

const Context = styled.div`
  ${({ theme }) => theme.fonts.body3_m};
  color: ${({ theme }) => theme.colors.b400};
  margin: 12px 0;
`;

const ContentBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 36px 0 23px 0;
`;

const CheckboxBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
`;
