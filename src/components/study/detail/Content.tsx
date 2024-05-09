import styled from "styled-components";
import EditorNote from "./EditorNote";
import Image from "next/image";

const TEXT1 = `지난 겨울방학동안 3학년 과학 교과서에 있는 실험들을 직접 집에서 했어요!`;
const TEXT2 = `과학교사 엄마라는 특권은 누려야되지 않겠냐며 미리 받아온 교과서를 뒤적이다 중학생들과 함께해도 재미있는 오호 만들과학교사 엄마라는 특권은 누려야되지 않겠냐며 미리 받아온 교과서를 뒤적이다 중학생들과 함께해도 재미있는\n\n 오호 만들과학교사 엄마라는 특권은 누려야되지 않겠냐며 미리 받아온 교과서를 뒤적이다 중학생들과 함께해도 재미있는 오호 만들과학교사 엄마라는 특권은 누려야되지 않겠냐며 미리 받아온 교과서를 뒤적이다 중학생들과 함께해도 재미있는 오호 만들과학교사 엄마라는 특권은 누려야되지 않겠냐며 미리 받아온 교과서를 뒤적이다 중학생들과 함께해도 재미있는 오호 만들`;

const Content = () => {
  return (
    <Container>
      <EditorNote />
      <Text>{TEXT1}</Text>
      <ImageBox>
        <Image
          src="/assets/study/study.svg"
          alt="study"
          layout="fill"
          objectFit="contain"
        />
      </ImageBox>
      <Text>{TEXT2}</Text>
    </Container>
  );
};

export default Content;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: ${({ theme }) => theme.colors.b50};
  gap: 17px;
`;

const Text = styled.div`
  ${({ theme }) => theme.fonts.body3_m};
  color: ${({ theme }) => theme.colors.b700};
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    position: relative !important;
    object-fit: cover;
  }
`;
