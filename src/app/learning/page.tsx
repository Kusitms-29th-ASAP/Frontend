"use client";

import Tobbar from "@/components/common/Tobbar";
import Banner from "@/components/learning/Banner";
import Review from "@/components/learning/review/Review";
import styled from "styled-components";

const Learning = () => {
  return (
    <>
      <Container>
        <Tobbar text="가정학습" />
        <Banner />
      </Container>
      <Review />
    </>
  );
};

export default Learning;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
