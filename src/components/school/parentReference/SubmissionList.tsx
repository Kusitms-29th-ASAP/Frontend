import ListBox from "@/components/common/ListBox";
import styled from "styled-components";

type submission = {
  id: number;
  date: string;
  content1: string;
  content2: string;
  time: string;
};

interface SubmissionListProps {
  submissionList: submission[];
}

const SubmissionList = (props: SubmissionListProps) => {
  const { submissionList } = props;

  return (
    <Container>
      {submissionList.map((data) => (
        <ListBox
          key={data.id}
          listboxType="content"
          type={data.date}
          content1={data.content1}
          content2={data.content2}
          time={data.time}
        />
      ))}
    </Container>
  );
};

export default SubmissionList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 8px;
  height: 100%;

  background: ${({ theme }) => theme.colors.b80};
`;
