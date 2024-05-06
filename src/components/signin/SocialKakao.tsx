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
      />
    </SocialLoginBox>
  );
};

export default SocialKakao;

const SocialLoginBox = styled.div`
  cursor: pointer;
  margin-bottom: 136px;

  img {
    width: 100%;
    height: 100%;
    position: relative;
    object-fit: cover;
  }
`;
