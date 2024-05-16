"use client";

import Button from "@/components/common/Button";
import Topbar from "@/components/common/Topbar";
import styled from "styled-components";
import Image from "next/image";

const AbsentReasonForm = () => {
  return (
    <Container>
      <div>
        <Topbar text="결석 사유서 작성" icon={true} />
        <Title>
          <span>결석 사유서를 클릭</span>해서 <br />
          작성을 시작해보세요
        </Title>
      </div>
      <ImageBox style={{ width: "85%" }}>
        <Image
          src="/assets/school/absent_form.svg"
          alt="absent_form"
          layout="fill"
          objectFit="contain"
        />
      </ImageBox>
      <Button type={"gray"} text={"제출하기"} />
    </Container>
  );
};

export default AbsentReasonForm;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  height: 100vh;
  div {
    width: 100%;
  }
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
