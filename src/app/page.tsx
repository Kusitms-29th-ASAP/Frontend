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

      <Layout>
        <Title>
          <p>우리 아이 학교소식 핵심 콕콕!</p>
          <h1>스쿨포인트</h1>
        </Title>
        <Image
          src={"/assets/main/main_chick.svg"}
          width={272}
          height={272}
          alt="logo"
        />
        <SocialKakao />
      </Layout>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 480px;
  width: 100%;
  height: 100vh;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  width: 100%;
  height: 100%;

  img {
    margin: 64px 0 48px 0;
  }
`;

const Title = styled.div`
  color: ${({ theme }) => theme.colors.primary600};
  text-align: center;

  p {
    ${({ theme }) => theme.fonts.heading2_r};
  }
  h1 {
    font-size: 32px;
    font-weight: 700;
    line-height: 134%; /* 42.88px */
    letter-spacing: -0.64px;
  }
`;
