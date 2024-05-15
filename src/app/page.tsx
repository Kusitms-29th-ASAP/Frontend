"use client";

import styled from "styled-components";
import SocialKakao from "@/components/signin/SocialKakao";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <StyledImage
        src="/assets/main/main_background.svg"
        width={480}
        height={800}
        alt="background"
        over-fit="cover"
      />
      <SocialKakao />
    </Container>
  );
}

const Container = styled.div`
  max-width: 480px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
