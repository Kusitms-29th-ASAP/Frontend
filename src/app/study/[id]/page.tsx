"use client";

import styled from "styled-components";
import Topbar from "@/components/common/Topbar";
import Header from "@/components/study/detail/Header";
import Content from "@/components/study/detail/Content";

const StudyDetail = () => {
  return (
    <>
      <Container>
        <Topbar text="가정학습" />
        <Header />
      </Container>
      <Content />
    </>
  );
};

export default StudyDetail;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
