import styled from "styled-components";
import Image from "next/image";

interface SubjectContentProps {
  id: number;
  title: string;
  isSelected: boolean;
  onSelect: (id: number) => void;
}

const SubjectContent = (props: SubjectContentProps) => {
  const { id, title, isSelected, onSelect } = props;

  const handleSubjectClick = () => {
    onSelect(id);
  };

  return (
    <Container onClick={handleSubjectClick}>
      <ImageBox isSelected={isSelected}>
        <div></div>
        {isSelected ? (
          <Image
            src={`/assets/study/subject/study${id}_selected.svg`}
            alt={title}
            width={24}
            height={24}
          />
        ) : (
          <Image
            src={`/assets/study/subject/study${id}.svg`}
            alt={title}
            width={24}
            height={24}
          />
        )}
      </ImageBox>
      <Title isSelected={isSelected}>{title}</Title>
    </Container>
  );
};

export default SubjectContent;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  cursor: pointer;
`;

const ImageBox = styled.div<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 7px;
  border-radius: 8px;
  background: ${({ isSelected, theme }) =>
    isSelected ? "rgba(255, 135, 0, 0.15)" : theme.colors.b100};
  border: 1px solid
    ${({ isSelected, theme }) =>
      isSelected ? "transparent" : theme.colors.b200};

  ${({ isSelected }) =>
    isSelected &&
    `
    flex-direction: column;
    padding-top: 0;

    div {
      width: 14px;
      height: 4px;
      border-radius: 8px;
      background: #ff8700;
      margin-bottom: 3px;
    }
  `}
`;

const Title = styled.div<{ isSelected: boolean }>`
  ${({ isSelected, theme }) =>
    isSelected ? theme.fonts.body3_b : theme.fonts.body3_r}
  color: ${({ isSelected, theme }) =>
    isSelected ? "orange" : theme.colors.b400};
`;
