import subjectTransformData from "@/data/subjectTransformData";
import styled from "styled-components";

interface SubjectBoxProps {
  subject: string;
}

const SubjectBox = (props: SubjectBoxProps) => {
  const { subject } = props;

  const transformSubject = (subject: string) => {
    return subjectTransformData[subject] || subject;
  };

  return <Container>{transformSubject(subject)}</Container>;
};

export default SubjectBox;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  text-align: center;

  ${(props) => props.theme.fonts.caption1_m};
  color: ${({ theme }) => theme.colors.b400};

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.b200};
  background: ${({ theme }) => theme.colors.b50};

  @media screen and (max-width: 380px) {
    ${(props) => props.theme.fonts.caption2_m};
  }
`;
