"use client";

import Button from "@/components/common/Button";
import styled from "styled-components";

const Completion = () => {
  return (
    <Container>
      <Button text="로그인" />
    </Container>
  );
};

export default Completion;

const Container = styled.div`
  padding: 20px;
  background-image: url("/assets/main/complete_background.svg");
  background-position: center;
  background-repeat: no-repeat;
  width: 480px;
  height: 100vh;
  position: relative;
`;
