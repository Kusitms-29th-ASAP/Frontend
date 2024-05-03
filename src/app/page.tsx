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
  width: 480px;
  height: 100vh;
  position: relative;
`;

const SociclLoginBox = styled.div`
  width: 100%;
  height: 48px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 10%;
  cursor: pointer;
`;
