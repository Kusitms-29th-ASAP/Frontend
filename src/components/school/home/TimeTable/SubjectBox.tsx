import styled from "styled-components";

interface SubjectBoxProps {
  subject: string;
}

const SubjectBox = (props: SubjectBoxProps) => {
  const { subject } = props;

  return <Container>{subject}</Container>;
};

export default SubjectBox;

const Container = styled.div`
  display: flex;
  padding: 6px 12px;
  justify-content: center;
  align-items: center;
  height: 30px;
  white-space: nowrap;

  ${(props) => props.theme.fonts.caption1_m};
  color: ${({ theme }) => theme.colors.b400};

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.b200};
  background: ${({ theme }) => theme.colors.b50};
`;
