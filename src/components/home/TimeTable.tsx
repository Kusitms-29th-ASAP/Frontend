import { theme } from "@/styles/theme";
import styled from "styled-components";
import Card from "../common/Card";
import { timeData } from "@/data/homeData";

const TimeTable = () => {
  let now = new Date();
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  let dayOfWeek = week[now.getDay()];

  return (
    <TimeContainer>
      {dayOfWeek}요일 시간표
      <TableContainer>
        {timeData.map((data, index) => (
          <Card sub={`${index + 1}교시`} main={data} key={index} />
        ))}
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
  letter-spacing: -0.28px;
`;

const TableContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 5px;
`;
