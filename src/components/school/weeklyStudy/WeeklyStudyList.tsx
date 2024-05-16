import { TodayStudyData } from "@/data/todayStudyData";
import WhiteBox from "../WhiteBox";
import TodayStudyBox from "./TodayStudyBox";

const WeeklyStudyList = () => {
  return (
    <WhiteBox>
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
