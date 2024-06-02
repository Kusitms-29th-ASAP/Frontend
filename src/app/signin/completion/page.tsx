"use client";

import Button from "@/components/common/Button";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Completion = () => {
  const router = useRouter();

  const handleStartButtonClick = () => {
    router.push("/home");
  };

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
          <h1>회원가입 완료!</h1>
          <p>스쿨포인트에 오신 것을 환영합니다!</p>
        </Title>
        <Image
          src={"/assets/common/grade3.svg"}
          width={232}
          height={232}
          alt="logo"
        />
        <AddChildren>
          <div>혹시, 자녀 추가 등록이 필요하신가요?</div>
          <Button text="자녀 추가하러 가기" type="primaryLight" size="medium" />
        </AddChildren>
      </Layout>

      <ButtonBox>
        <Button text="스쿨포인트 시작하기" onClick={handleStartButtonClick} />
      </ButtonBox>
    </Container>
  );
};

export default Completion;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 480px;
  width: 100%;
  height: 100vh;
  position: relative;
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
    margin: 20px 0 56px 0;
  }
`;

const AddChildren = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  div {
    color: ${({ theme }) => theme.colors.b400};
    ${({ theme }) => theme.fonts.body3_m};
  }
`;

const Title = styled.div`
  text-align: center;

  h1 {
    ${({ theme }) => theme.fonts.heading1_b};
    color: ${({ theme }) => theme.colors.primary500};
  }
  p {
    ${({ theme }) => theme.fonts.body3_m};
    color: ${({ theme }) => theme.colors.b400};
  }
`;

const ButtonBox = styled.div`
  position: absolute;
  bottom: 0;
  padding: 0 20px 28px 20px;
  width: 100%;
`;
