import ListNumber from "@/components/common/ListNumber";
import { theme } from "@/styles/theme";
import styled from "styled-components";

interface Description {
  description: string;
}

interface ListNumberBoxProps {
  data: Description[];
}

const ListNumberBox = (props: ListNumberBoxProps) => {
  const { data } = props;

  return (
    <Container>
      {data ? (
        data.map((data, index) => (
          <ListNumber index={index + 1} key={index} text={data.description} />
        ))
      ) : (
        <NoData>알림 내용이 없어요!</NoData>
      )}
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

const NoData = styled.div`
  width: 100%;
  height: 100%;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.b500};
  ${(props) => props.theme.fonts.caption1_m};
`;
