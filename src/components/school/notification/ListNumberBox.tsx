import ListNumber from "@/components/common/ListNumber";
import styled from "styled-components";

interface ListNumberBoxProps {
  data: string[];
}

const ListNumberBox = (props: ListNumberBoxProps) => {
  const { data } = props;

  return (
    <Container>
      {data.map((data, index) => (
        <ListNumber index={index + 1} key={index} text={data} />
      ))}
    </Container>
  );
};

export default ListNumberBox;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 12px 10px;
  background: ${({ theme }) => theme.colors.b80};
  border-radius: 8px;
`;
