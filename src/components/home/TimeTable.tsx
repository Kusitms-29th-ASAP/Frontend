import { theme } from "@/styles/theme";
import styled from "styled-components";
import Card, { CardProps } from "../common/Card";
import Axios from "@/apis/axios";
import { useEffect, useState } from "react";

interface Timetable {
  time: number;
  subject: string;
}

const TimeTable = () => {
  const [timeToday, setTimeToday] = useState<Timetable[]>([]);
  let now = new Date();
  const week = ["일", "월", "화", "수", "목", "금", "토"];

  useEffect(() => {
    Axios.get(`/api/v1/timetables/today`)
      .then((response) => {
        const timeToday: Timetable[] = response.data.timetables;
        setTimeToday(timeToday);
        // console.log("Today Time Table Get Success:", response.data);
      })
      .catch(() => {
        // console.error("Today Time Table Get Error");
      });
  }, []);

  return (
    <TimeContainer>
      오늘의 시간표
      <TableContainer>
        {timeToday.length > 0 ? (
          timeToday.map((data, index) => (
            <Card
              key={index}
              sub={`${data.time.toString()}교시`}
              main={data.subject}
              color="orange"
              type="timetable"
            />
          ))
        ) : (
          <NoData>시간표 정보가 없어요 :(</NoData>
        )}
      </TableContainer>
    </TimeContainer>
  );
};

export default TimeTable;

const TimeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  ${(props) => props.theme.fonts.body2_b};
  color: ${theme.colors.b600};
`;

const TableContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

const NoData = styled.div`
  ${(props) => props.theme.fonts.body3_m};
`;
