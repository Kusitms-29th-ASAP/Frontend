"use client";

import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleKakaoLoginClick = () => {
    router.push("/signin/terms");
  };

  return (
    <Container>
      <SociclLoginBox onClick={handleKakaoLoginClick}>
        <Image
          src="/assets/main/kakao_social.svg"
          alt="kakao"
          layout="fill"
          objectFit="contain"
        />
      </SociclLoginBox>
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

const SociclLoginBox = styled.div`
  cursor: pointer;
  margin-bottom: 136px;

  img {
    width: 100%;
    height: 100%;
    position: relative !important;
    object-fit: cover;
  }
`;
