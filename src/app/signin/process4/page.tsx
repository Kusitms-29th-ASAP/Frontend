"use client";

import Button from "@/components/common/Button";
import Checkbox from "@/components/common/Checkbox";
import Tobbar from "@/components/common/Tobbar";
import ProgressBar from "@/components/signin/ProgressBar";
import Subtitle from "@/components/signin/Subtitle";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const CONTEXT1 = "마지막 단계에요!";
const CONTEXT2 = "알레르기 정보 설정은 나중에 바꿀 수 있어요.";
const TITLE = "자녀의 알레르기 유발 식재료가 \n 있다면, 체크해주세요.";

const categories = [
  {
    name: "우유 및 계란",
    items: ["우유", "난류"],
  },
  {
    name: "곡류",
    items: ["메밀", "밀"],
  },
  {
    name: "견과류",
    items: ["호두", "땅콩", "대두", "잣"],
  },
  {
    name: "육류",
    items: ["닭고기", "돼지고기", "쇠고기"],
  },
  {
    name: "해산물",
    items: ["고등어", "새우", "오징어", "게", "조개류"],
  },
  {
    name: "과일/채소류 및 기타",
    items: ["복숭아", "토마토", "아황산류"],
  },
];

const SigninProcess4 = () => {
  const router = useRouter();

  const handleNextButtonClick = () => {
    router.push("/signin/process5");
  };

  return (
    <Container>
      <Tobbar text="회원가입" />
      <ProgressBar rate={90} />
      <Context>{CONTEXT1}</Context>
      <Title>{TITLE}</Title>
      <Context>{CONTEXT2}</Context>

      <ContentBox>
        {categories.map((category) => (
          <div key={category.name}>
            <Subtitle>{category.name}</Subtitle>
            <CheckboxBox>
              {category.items.map((item) => (
                <Checkbox key={item} label={item} checkboxType="checkBtn" />
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
  height: 100%;
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
