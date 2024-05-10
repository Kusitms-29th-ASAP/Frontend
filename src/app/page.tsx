"use client";

import styled from "styled-components";
import SocialKakao from "@/components/signin/SocialKakao";

export default function Home() {
  return (
    <Container>
      <SocialKakao />
    </Container>
  );
}

const Container = styled.div`
  background-image: url("/assets/main/main_background.svg");
  background-position: center;
  background-repeat: no-repeat;

  padding: 20px;
  max-width: 480px;
  width: 100%;
  height: 100vh;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;
