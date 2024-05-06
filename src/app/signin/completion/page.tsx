"use client";

import Button from "@/components/common/Button";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Completion = () => {
  const router = useRouter();

  const handleStartButtonClick = () => {
    router.push("/home");
  };

  return (
    <Container>
      <Image
        src="/assets/common/grade1.svg"
        alt="complete"
        width={232}
        height={232}
      />
      <AddChildren>
        <div>혹시, 자녀 추가 등록이 필요하신가요?</div>
        <Button
          text="자녀 추가하러 가기"
          buttonType="primaryLight"
          size="medium"
        />
      </AddChildren>
      <Button text="스쿨포인트 시작하기" onClick={handleStartButtonClick} />
    </Container>
  );
};

export default Completion;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  padding: 20px;
  background-image: url("/assets/main/complete_background.svg");
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  position: relative;
`;

const AddChildren = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin: 56px 0 123px 0;
  div {
    color: ${({ theme }) => theme.colors.b400};
    ${({ theme }) => theme.fonts.body3_m};
  }
`;
