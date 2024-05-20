"use client";

import Topbar from "@/components/common/Topbar";
import Banner from "@/components/study/Banner";
import Subjects from "@/components/study/subject/Subjects";
import styled from "styled-components";

const Study = () => {
  return (
    <>
      <Container>
        <Topbar text="가정학습" icon={false} />
        <Banner />
        <Subjects />
      </Container>
    </>
  );
};

export default Study;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
