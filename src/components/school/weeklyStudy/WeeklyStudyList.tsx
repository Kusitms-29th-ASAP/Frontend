import { TodayStudyData } from "@/data/todayStudyData";
import WhiteBox from "../WhiteBox";
import TodayStudyBox from "./TodayStudyBox";
import DateSelect from "./DateSelect";
import styled from "styled-components";

const WeeklyStudyList = () => {
  return (
    <WhiteBox>
      <Container>
        <DateSelect type="week" />
        <TodayStudyList>
          {TodayStudyData.map((data) => (
            <TodayStudyBox
              key={data.id}
              subject={data.subject}
              studies={data.studies}
            />
          ))}
        </TodayStudyList>
      </Container>
    </WhiteBox>
  );
};

export default WeeklyStudyList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const TodayStudyList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
