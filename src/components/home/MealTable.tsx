import { mealData } from "@/data/homeData";
import { theme } from "@/styles/theme";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import MealTablePopup from "./MealTablePopup";

const MealTable = () => {
  let now = new Date();
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  let dayOfWeek = week[now.getDay()];

  const [mealTable, setMealTable] = useState(false);

  const handleMealTable = () => {
    if (mealTable) {
      setMealTable(false);
    } else {
      setMealTable(true);
    }
  };

  return (
    <MealContainer>
      <Title>
        {dayOfWeek}요일 시간표
        <More onClick={handleMealTable}>
          자세히 보기
          <Image
            src="/assets/icons/ic_chevron_right.svg"
            alt="right"
            width={20}
            height={20}
          />
        </More>
      </Title>
      <TableContainer>
        {mealData.map((data, index) => {
          return <List key={index}>{data}</List>;
        })}
      </TableContainer>
      {mealTable && <MealTablePopup />}
    </MealContainer>
  );
};

export default MealTable;

const MealContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  ${(props) => props.theme.fonts.body2_b};
  color: ${theme.colors.b600};
  line-height: 150%;
  letter-spacing: -0.28px;
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const More = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
  gap: 8px;
  color: ${theme.colors.b400};
  ${(props) => props.theme.fonts.caption1_m};
`;

const TableContainer = styled.div`
  width: 100%;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  border-radius: 10px;
  border: 1px solid ${theme.colors.b200};
`;

const List = styled.div`
  width: 100%;
  height: 32px;
  border-radius: 8px;
  background: ${theme.colors.b100};
  padding: 6px 12px;
  color: ${theme.colors.b600};
  ${(props) => props.theme.fonts.body3_r};
`;
