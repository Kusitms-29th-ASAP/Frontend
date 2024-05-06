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
  padding: 20px;
  background-image: url("/assets/main/main_background.svg");
  background-position: center;
  background-repeat: no-repeat;
  max-width: 480px;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;
