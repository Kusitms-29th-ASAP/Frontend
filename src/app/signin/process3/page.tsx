"use client";

import Button from "@/components/common/Button";
import Input from "@/components/common/CustomInput";
import Topbar from "@/components/common/Topbar";
import ProgressBar from "@/components/signin/ProgressBar";
import Subtitle from "@/components/signin/Subtitle";
import { setUser } from "@/redux/slices/userSlice";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const DESCRIPTION =
  "학급 초대 코드를 아직 받지 않으셔도 어플에 가입하실 수 있어요.\n 학급 초대 코드는 나중에 등록할 수 있어요.";

const SigninProcess3 = () => {
  const studentName = useSelector(
    (state: RootState) => state.user.children[0].name
  );
  const [schoolParentName, setSchoolParentName] = useState("김부모");
  const [school, setSchool] = useState("");
  const [grade, setGrade] = useState("");
  const name = studentName.substr(1, 3);
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  const handleSchoolChange = (value: string) => {
    setSchool(value);
  };
  const handleGradeChange = (value: string) => {
    setGrade(value);
  };
  const handleNextButtonClick = () => {
    const updateChildren = user.children.map((child) => ({
      ...child,
      elementSchoolId: 566, // 임시
      elementSchoolGrade: grade,
    }));

    dispatch(
      setUser({
        ...user,
        children: updateChildren,
      })
    );

    router.push("/signin/process3-1");
  };

  return (
    <Container>
      <Topbar text="회원가입" />
      <ProgressBar rate={60} />
      <Context>
        반가워요! {name} 학생 학부모이신 {schoolParentName}님!
      </Context>
      <Title>
        {name} 학생의
        <br /> 학교를 등록해주세요.
      </Title>
      <ContentBox>
        <div>
          <Subtitle>학교 검색으로 등록하기</Subtitle>
          <InputBox>
            <Input
              value={school}
              onChange={handleSchoolChange}
              placeholder="학교의 이름을 입력해주세요."
            />
            <Button text="검색" size="small" disabled={!school} />
          </InputBox>
        </div>

        <div>
          <Subtitle>
            학급 초대 코드 <span>선택</span>
          </Subtitle>
          <Description>{DESCRIPTION}</Description>
          <Input
            value={grade}
            onChange={handleGradeChange}
            placeholder="전달받은 초대 코드가 있다면 입력해주세요."
          />
        </div>
      </ContentBox>
      <Button text="다음" disabled={!school} onClick={handleNextButtonClick} />
    </Container>
  );
};

export default SigninProcess3;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  min-height: 100%;
  padding: 20px;
`;

const Context = styled.div`
  ${({ theme }) => theme.fonts.body3_m};
  color: ${({ theme }) => theme.colors.b400};
  margin-top: 12px;
`;

const Title = styled.div`
  ${({ theme }) => theme.fonts.heading2_b};
  color: ${({ theme }) => theme.colors.b700};
  margin: 12px 0 60px 0;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100%;
`;

const InputBox = styled.div`
  display: flex;
  gap: 12px;
`;

const Description = styled.div`
  ${({ theme }) => theme.fonts.caption1_m};
  color: ${({ theme }) => theme.colors.b400};
  margin: 4px 0 16px 0;
`;
