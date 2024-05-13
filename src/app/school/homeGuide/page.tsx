"use client";

import Topbar from "@/components/common/Topbar";
import ReplyCompleted from "@/components/school/homeGuide/ReplyCompleted";
import ReplyRequired from "@/components/school/homeGuide/ReplyRequired";
import styled from "styled-components";

const HomeGuide = () => {
  return (
    <>
      <Container>
        <Topbar text="가정통신문 내역 확인" icon={true} />
      </Container>
      <ReplyRequired />
      <ReplyCompleted />
    </>
  );
};

export default HomeGuide;

const Container = styled.div`
  padding: 16px 20px;
`;
