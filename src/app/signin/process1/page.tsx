"use client";

import Button from "@/components/common/Button";
import Input from "@/components/common/CustomInput";
import Topbar from "@/components/common/Topbar";
import ProgressBar from "@/components/signin/ProgressBar";
import { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import Subtitle from "@/components/signin/Subtitle";

const TITLE = "안녕하세요!\n스쿨포인트에 오신 걸 환영해요.";
const CONTEXT =
  "학부모님의 편리한 소식 확인을 위해 \n 몇 가지 정보를 입력해 주세요!";
const WARNING =
  "잘못된 입력 형식입니다. \n010-0000-0000 으로 다시 작성해주세요!";

const SigninProcess1 = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const router = useRouter();

  const handlePhoneNumberChange = (value: string) => {
    setPhoneNumber(value);
  };
  const handleNextButtonClick = () => {
    router.push("/signin/process2");
  };

  const isValidPhoneNumber = (number: string) => {
    const regex = /^01([0|1|6|7|8|9]?)-(\d{3,4})-(\d{4})$/;
    return regex.test(number);
  };

  return (
    <Container>
      <Topbar text="회원가입" />
      <ProgressBar rate={20} />
      <Title>{TITLE}</Title>
      <Context>{CONTEXT}</Context>

      <ContentBox>
        <Subtitle>휴대폰 번호를 입력해주세요.</Subtitle>
        <Input
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          placeholder="010-0000-0000"
        />
        {phoneNumber && !isValidPhoneNumber(phoneNumber) && (
          <WarningText>{WARNING}</WarningText>
        )}
      </ContentBox>

      <Button
        text="다음"
        disabled={!isValidPhoneNumber(phoneNumber)}
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
  margin: 12px 0 8px 0;
`;

const Context = styled.div`
  ${({ theme }) => theme.fonts.body3_m};
  color: ${({ theme }) => theme.colors.b400};
  margin-bottom: 65px;
`;

const ContentBox = styled.div`
  height: 100%;
`;

const WarningText = styled.div`
  color: #ef4444;
  ${({ theme }) => theme.fonts.caption1_m};
  margin-top: 6px;
`;
