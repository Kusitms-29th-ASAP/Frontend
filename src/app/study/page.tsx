"use client";

import Tabbar from "@/components/common/Tabbar";
import Tobbar from "@/components/common/Tobbar";
import Banner from "@/components/study/Banner";
import Review from "@/components/study/review/Review";
import styled from "styled-components";

const Study = () => {
  return (
    <>
      <Container>
        <Tobbar text="가정학습" />
        <Banner />
      </Container>
      <Review />
      <Tabbar />
    </>
  );
};

export default Study;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
