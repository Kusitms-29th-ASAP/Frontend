"use client";

import CustomInput from "@/components/common/CustomInput";
import Topbar from "@/components/common/Topbar";
import SubmissionList from "@/components/school/parentReference/SubmissionList";
import { useState } from "react";
import styled from "styled-components";

const AbsentReasonSubmission = () => {
  const [selected, setSelected] = useState("지난주");

  return (
    <>
      <Container>
        <Topbar text="결석 사유서 제출내역" icon={true} />
        <Title>
          과거에 제출했던
          <br /> <span>결석사유서</span>를 확인해볼까요?
        </Title>
        <CustomInput inputType="select" value={selected} onChange={() => {}} />
      </Container>
      <SubmissionList />
    </>
  );
};

export default AbsentReasonSubmission;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 20px;
`;

const Title = styled.div`
  ${({ theme }) => theme.fonts.body2_b};
  color: ${({ theme }) => theme.colors.b700};
  span {
    color: ${({ theme }) => theme.colors.primary700};
  }
  margin: 24px 0 12px 0;
`;
