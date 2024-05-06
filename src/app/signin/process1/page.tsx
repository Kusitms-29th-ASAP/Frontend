"use client";

import Button from "@/components/common/Button";
import Input from "@/components/common/CustomInput";
import Tobbar from "@/components/common/Tobbar";
import ProgressBar from "@/components/signin/ProgressBar";
import { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import Subtitle from "@/components/signin/Subtitle";
import Checkbox from "@/components/common/Checkbox";

const CONTEXT = "안녕하세요!\n스쿨포인트에 오신 걸 환영해요.";

const SigninProcess1 = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userType, setUserType] = useState("");
  const router = useRouter();

  const handlePhoneNumberChange = (value: string) => {
    setPhoneNumber(value);
  };
  const handleUserTypeChange = (type: string) => {
    setUserType(type);
  };
  const handleNextButtonClick = () => {
    router.push("/signin/process2");
  };

  return (
    <Container>
      <Tobbar text="회원가입" />
      <ProgressBar rate={20} />
      <Title>{CONTEXT}</Title>

      <ContentBox>
        <Subtitle>회원님은 현재...</Subtitle>
        <CheckButtonBox>
          <Checkbox
            label="학부모님"
            checkboxType="checkBtn"
            checked={userType === "parent"}
            onChange={() => handleUserTypeChange("parent")}
          />
          <Checkbox
            label="교사"
            checkboxType="checkBtn"
            checked={userType === "teacher"}
            onChange={() => handleUserTypeChange("teacher")}
          />
        </CheckButtonBox>

        <Subtitle>휴대폰 번호를 입력해주세요.</Subtitle>
        <Input
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          placeholder="010-0000-0000"
        />
      </ContentBox>

      <Button
        text="다음"
        disabled={!phoneNumber || !userType}
        onClick={handleNextButtonClick}
      />
    </Container>
  );
};

export default SigninProcess1;

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
`;

const CheckButtonBox = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 40px;
`;
