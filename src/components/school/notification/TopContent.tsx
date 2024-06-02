import styled from "styled-components";
import TitleBox from "./TitleBox";
import TopBox from "./TopBox";

interface TopContentProps {
  isToday: boolean;
  day: string;
  teacher: string;
}

const TopContent = (props: TopContentProps) => {
  const { isToday, day, teacher } = props;

  return (
    <Container>
      <TopBox isToday={isToday} />
      <TitleBox day={day} teacher={teacher} />
    </Container>
  );
};

export default TopContent;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
