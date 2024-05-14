"use client";

import styled from "styled-components";
import SocialKakao from "@/components/signin/SocialKakao";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <Image
        loading="lazy"
        src="/assets/main/main_background.svg"
        layout="fill"
        alt="background"
      />
      <SocialKakao />
    </Container>
  );
}

const Container = styled.div`
  max-width: 480px;
  width: 100%;
  height: 100vh;
  position: relative;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;
