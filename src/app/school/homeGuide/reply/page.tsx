"use client";

import Button from "@/components/common/Button";
import Topbar from "@/components/common/Topbar";
import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";
import Toast from "@/components/common/Toast";
import FormPopup from "@/components/school/homeGuide/FormPopup";

const HomeGuideForm = () => {
  const [writeForm, setWriteForm] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const handleWriteFormClick = () => {
    setWriteForm(!writeForm);
  };

  return (
    <Container>
      <div>
        <Topbar text="가정통신문 회신하기" icon={true} />
        <Title>
          <span>가정통신문을 클릭</span>해서 <br />
          작성을 시작해보세요!
        </Title>
      </div>
      <ImageBox onClick={handleWriteFormClick}>
        <Image
          src="/assets/school/home_guide_form.svg"
          alt="home_guide_form"
          layout="fill"
          objectFit="contain"
        />
      </ImageBox>
      {writeForm && (
        <FormPopup onClose={handleWriteFormClick} setShowToast={setShowToast} />
      )}
      {showToast && (
        <Toast
          message="제출이 완료되었어요!"
          type="basic"
          duration={3000}
          onClose={() => setShowToast(false)}
        />
      )}
      <Button type={"gray"} text={"제출하기"} />
    </Container>
  );
};

export default HomeGuideForm;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  padding: 16px 20px;
  height: 100vh;
`;

const Title = styled.div`
  margin: 16px 0;
  ${({ theme }) => theme.fonts.heading2_b};
  color: ${({ theme }) => theme.colors.b700};
  span {
    color: ${({ theme }) => theme.colors.primary500};
  }
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;

  img {
    width: 80%;
    position: relative !important;
    object-fit: cover;
  }
`;
