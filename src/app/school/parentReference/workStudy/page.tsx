"use client";

import Topbar from "@/components/common/Topbar";
import OptionList from "@/components/school/parentReference/OptionList";
import Title from "@/components/school/parentReference/Title";
import { useState } from "react";
import styled from "styled-components";

const WorkStudyOptions = ["교외 체험학습 신청서", "신청서 제출 내역"];

const WorkStudy = () => {
  const [schoolName, setSchoolName] = useState("계현");

  return (
    <>
      <Container>
        <Topbar text="체험학습 신청서" icon={true} />
      </Container>
      <Background>
        <Title title={`${schoolName}초등학교 체험학습 신청서`} />
        <OptionList optionList={WorkStudyOptions} />
      </Background>
    </>
  );
};

export default WorkStudy;

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
