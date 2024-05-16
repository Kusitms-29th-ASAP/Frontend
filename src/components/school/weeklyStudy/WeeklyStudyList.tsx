import { TodayStudyData } from "@/data/todayStudyData";
import WhiteBox from "../WhiteBox";
import TodayStudyBox from "./TodayStudyBox";
import DateSelect from "../DateSelect";
import styled from "styled-components";
import { useState } from "react";

const WeeklyStudyList = () => {
  const [weekStart, setWeekStart] = useState(0);
  const [weekEnd, setWeekEnd] = useState(0);

  console.log(weekStart);

  return (
    <WhiteBox>
      <DateSelect
        type="week"
        weekStart={weekStart}
        setWeekStart={setWeekStart}
        weekEnd={weekEnd}
        setWeekEnd={setWeekEnd}
      />
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
