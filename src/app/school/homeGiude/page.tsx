"use client";

import Topbar from "@/components/common/Topbar";
import ReplyRequired from "@/components/school/homeGiude/ReplyRequired";
import styled from "styled-components";

const HomeGiude = () => {
  return (
    <>
      <Container>
        <Topbar text="가정통신문 내역 확인" icon={true} />
      </Container>
      <ReplyRequired />
    </>
  );
};

export default HomeGiude;

const Container = styled.div`
  padding: 16px 20px;
`;
