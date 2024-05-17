import { theme } from "@/styles/theme";
import styled from "styled-components";
import Card, { CardProps } from "../common/Card";
import Axios from "@/apis/axios";
import { useEffect, useState } from "react";

const TimeTable = () => {
  const [timeToday, setTimeToday] = useState<CardProps[]>([]);
  let now = new Date();
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  let dayOfWeek = week[now.getDay()];

  useEffect(() => {
    Axios.get(`/api/v1/timetables/today`)
      .then((response) => {
        const timeToday = response.data;
        setTimeToday(timeToday);
        console.log("Today Time Table Get Success:", response.data);
      })
      .catch(() => {
        console.error("Today Time Table Get Error");
      });
  });

  return (
    <TimeContainer>
      {dayOfWeek}요일 시간표
      <TableContainer>
        {timeToday.length > 0 ? (
          timeToday.map((data, index) => (
            <Card time={data.time} subject={data.subject} key={index} />
          ))
        ) : (
          <div>No data available</div>
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
