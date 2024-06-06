import More from "@/components/common/More";
import WhiteBox from "../../WhiteBox";
import DateSelect from "../DateSelect";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import TimeTableBox from "./TimeTableBox";

const TimeTable = () => {
  const router = useRouter();

  const handleDetailClick = () => {
    router.push("/school/weeklyStudy");
  };

  return (
    <WhiteBox>
      <Container>
        <TopBox>
          <DateSelect type={"week"} />
          <More text="일정 자세히 보기" onClick={handleDetailClick} />
        </TopBox>
        <TimeTableBoxContainer>
          <TimeTableBox />
        </TimeTableBoxContainer>
      </Container>
    </WhiteBox>
  );
};

export default TimeTable;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 360px) {
    flex-direction: column;
  }
`;

const TimeTableBoxContainer = styled.div`
  overflow-x: scroll;
`;
