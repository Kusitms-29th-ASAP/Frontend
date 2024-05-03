"use client";

import Button from "@/components/common/Button";
import Checkbox from "@/components/common/Checkbox";
import Input from "@/components/common/Input";
import Tobbar from "@/components/common/Tobbar";
import ProgressBar from "@/components/signin/ProgressBar";
import Subtitle from "@/components/signin/Subtitle";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styled from "styled-components";

const CONTEXT = "자녀에 대한 정보를\n알려주세요!";

const SigninProcess2 = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [sexType, setSexType] = useState("");
  const router = useRouter();

  const handleNameChange = (value: string) => {
    setName(value);
  };
  const handleDateChange = (value: string) => {
    setDate(value);
  };
  const handleSexTypeChange = (type: string) => {
    setSexType(type);
  };
  const handleNextButtonClick = () => {
    router.push("/signin/process3");
  };

  return (
    <Container>
      <Tobbar text="회원가입" />
      <ProgressBar rate={40} />
      <Title>{CONTEXT}</Title>
      <ContentBox>
        <div>
          <Subtitle>자녀의 이름을 입력해주세요.</Subtitle>
          <Input
            value={name}
            onChange={handleNameChange}
            placeholder="김자녀"
          />
        </div>

        <div>
          <Subtitle>자녀의 성별을 입력해주세요.</Subtitle>
          <CheckButtonBox>
            <Checkbox
              label="남자"
              checkboxType="checkBtn"
              checked={sexType === "male"}
              onChange={() => handleSexTypeChange("male")}
            />
            <Checkbox
              label="여자"
              checkboxType="checkBtn"
              checked={sexType === "female"}
              onChange={() => handleSexTypeChange("female")}
            />
          </CheckButtonBox>
          <SexNonSelected>성별 선택 안 함</SexNonSelected>
        </div>

        <div>
          <Subtitle>자녀의 생년월일을 선택해주세요.</Subtitle>
          <Input
            value={date}
            onChange={handleDateChange}
            placeholder="날짜를 선택해주세요."
          />
        </div>
      </ContentBox>
      <Button
        text="다음"
        disabled={!name || !sexType || !date}
        onClick={handleNextButtonClick}
      />
    </Container>
  );
};

export default SigninProcess2;

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

const ContentBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const CheckButtonBox = styled.div`
  display: flex;
  margin-top: 12px;
  gap: 12px;
`;

const SexNonSelected = styled.div`
  ${({ theme }) => theme.fonts.body3_m};
  color: ${({ theme }) => theme.colors.b500};
  margin-top: 12px;
  cursor: pointer;
`;
