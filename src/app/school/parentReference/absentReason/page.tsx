"use client";

import Topbar from "@/components/common/Topbar";
import OptionList from "@/components/school/parentReference/OptionList";
import Title from "@/components/school/parentReference/Title";
import { useState } from "react";
import styled from "styled-components";

const AbsentReasonOptions = ["결석 사유서", "사유서 제출 내역"];

const AbsentReason = () => {
  const [schoolName, setSchoolName] = useState("양원숲");

  return (
    <>
      <Container>
        <Topbar text="결석 사유서" icon={true} />
      </Container>
      <Background>
        <Title title={`${schoolName}초등학교 결석계`} />
        <OptionList optionList={AbsentReasonOptions} />
      </Background>
    </>
  );
};

export default AbsentReason;

const Container = styled.div`
  padding: 16px 20px 0 20px;
`;

const Background = styled.div`
  background: ${({ theme }) => theme.colors.b80};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  height: 100%;
`;
