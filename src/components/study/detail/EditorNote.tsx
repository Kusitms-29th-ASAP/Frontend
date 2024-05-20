import styled from "styled-components";

interface EditorNoteProps {
  editorNote: string;
}

const EditorNote = (props: EditorNoteProps) => {
  const { editorNote } = props;

  return (
    <Container>
      <Title>에디터의 노트</Title>
      <Context>{editorNote}</Context>
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
