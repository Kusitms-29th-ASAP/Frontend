import styled from "styled-components";

type Study = {
  id: number;
  title: string;
  textbook?: string;
  material?: string;
};

interface TodayStudyBoxProps {
  week: number;
  subject: string;
  studies: Study[];
}

const TodayStudyBox = (props: TodayStudyBoxProps) => {
  const { subject, studies } = props;

  return (
    <Container>
      <LeftBox>
        <SubjectTag>{subject}</SubjectTag>
      </LeftBox>
      <RightBox>
        {studies.map((study) => (
          <Study key={study.id}>
            <Title>{study.title}</Title>
            <TagBox>
              {study.textbook && (
                <TextBookTag>교과서 {study.textbook}pg</TextBookTag>
              )}
              {study.material && (
                <MaterialTag>준비물 : {study.material}</MaterialTag>
              )}
            </TagBox>
          </Study>
        ))}
      </RightBox>
    </Container>
  );
};

export default TodayStudyBox;

const Container = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.b80};
  padding: 12px;
  border-radius: 8px;
  display: flex;
  gap: 10px;
`;

const LeftBox = styled.div`
  width: 82px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const RightBox = styled.div`
  width: calc(100% - 82px);
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Study = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Title = styled.div`
  ${({ theme }) => theme.fonts.caption1_m};
  color: ${({ theme }) => theme.colors.b700};
`;

const Tag = styled.div`
  border-radius: 8px;
  padding: 3px 8px;
  ${({ theme }) => theme.fonts.caption1_m};
`;

const SubjectTag = styled(Tag)`
  background: ${({ theme }) => theme.colors.primary500};
  color: ${({ theme }) => theme.colors.white};
  white-space: nowrap;
`;

const TagBox = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;

const TextBookTag = styled(Tag)`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.b400};
  border: 1px solid ${({ theme }) => theme.colors.b400};
`;

const MaterialTag = styled(Tag)`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.sub_mint};
  border: 1px solid ${({ theme }) => theme.colors.sub_mint};
`;
