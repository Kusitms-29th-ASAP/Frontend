import { TodayStudyData } from "@/data/todayStudyData";
import WhiteBox from "../WhiteBox";
import TodayStudyBox from "./TodayStudyBox";
import DateSelect from "../DateSelect";
import styled from "styled-components";

const WeeklyStudyList = () => {
  return (
    <WhiteBox>
      <DateSelect type="week" />
      <CardList></CardList>
      {TodayStudyData.map((data) => (
        <TodayStudyBox
          key={data.id}
          subject={data.subject}
          studies={data.studies}
        />
      ))}
    </WhiteBox>
  );
};

export default WeeklyStudyList;

const CardList = styled.div`
  display: flex;
  gap: 18px;
`;
