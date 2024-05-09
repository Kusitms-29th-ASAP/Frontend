import styled from "styled-components";

const CONTEXT = `겨울 방학동안 아이와 함께 집에서 실험한 엄마표\n 과학교실입니다! 재밌게 봐주세용`;

const EditorNote = () => {
  return (
    <Container>
      <Title>에디터의 노트</Title>
      <Context>{CONTEXT}</Context>
    </Container>
  );
};

export default EditorNote;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  gap: 4px;

  background: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
`;

const Title = styled.div`
  ${({ theme }) => theme.fonts.body3_b};
  color: ${({ theme }) => theme.colors.primary700};
`;

const Context = styled.div`
  ${({ theme }) => theme.fonts.caption1_m};
  color: ${({ theme }) => theme.colors.b500};
`;
