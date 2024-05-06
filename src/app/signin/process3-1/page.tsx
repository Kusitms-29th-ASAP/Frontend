"use client";

import Button from "@/components/common/Button";
import Input from "@/components/common/CustomInput";
import Tobbar from "@/components/common/Tobbar";
import ProgressBar from "@/components/signin/ProgressBar";
import Subtitle from "@/components/signin/Subtitle";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styled from "styled-components";

const Process3_1 = () => {
  const [studentName, setstudentName] = useState("김동우");
  const [schoolParentName, setSchoolParentName] = useState("김부모");
  const name = studentName.substr(1, 3);
  const router = useRouter();

  const handleNextButtonClick = () => {
    router.push("/signin/process4");
  };

  const handleSelectClick = () => {};

  return (
    <Container>
      <Tobbar text="회원가입" />
      <ProgressBar rate={80} />
      <Context>
        반가워요! {name} 학생 학부모이신 {schoolParentName}님!
      </Context>
      <Title>
        {name} 학생의 <br /> 학급정보를 등록해주세요.
      </Title>
      <ContentBox>
        <Subtitle>자녀의 학년과 반을 입력해주세요.</Subtitle>
        <InputBox>
          <Input
            value=""
            onChange={() => {}}
            placeholder="학년"
            inputType="select"
          />
          <Input
            value=""
            onChange={() => {}}
            placeholder="반"
            inputType="select"
          />
        </InputBox>
      </ContentBox>
      <Button text="다음" onClick={handleNextButtonClick} />
    </Container>
  );
};

export default Process3_1;

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
  margin: 12px 0 60px 0;
`;

const Context = styled.div`
  ${({ theme }) => theme.fonts.body3_m};
  color: ${({ theme }) => theme.colors.b400};
  margin-top: 12px;
`;

const ContentBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const InputBox = styled.div`
  display: flex;
  gap: 12px;
`;
