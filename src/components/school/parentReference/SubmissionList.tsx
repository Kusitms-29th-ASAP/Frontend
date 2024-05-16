import ListBox from "@/components/common/ListBox";
import { AbsentSubmissionListData } from "@/data/submissionData";
import styled from "styled-components";

const SubmissionList = () => {
  return (
    <Container>
      {AbsentSubmissionListData.map((data) => (
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
