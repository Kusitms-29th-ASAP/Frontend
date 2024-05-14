import React from "react";
import Image from "next/image";
import styled from "styled-components";

const SocialKakao = () => {
  const REST_API_KEY = process.env.NEXT_PUBLIC_REST_API_KEY;
  const REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URI;
  const KAKAO_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handleLogin = () => {
    window.location.href = KAKAO_URL;
  };

  return (
    <SocialLoginBox onClick={handleLogin}>
      <Image
        src="/assets/main/kakao_social.svg"
        alt="kakao"
        layout="fill"
        objectFit="contain"
        loading="lazy"
      />
    </SocialLoginBox>
  );
};

export default SocialKakao;

const SocialLoginBox = styled.div`
  max-width: 480px;
  width: 100%;
  height: 48px;
  padding: 0 20px;
  cursor: pointer;
  position: absolute;
  bottom: 140px;
`;
