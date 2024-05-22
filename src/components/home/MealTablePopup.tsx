import { theme } from "@/styles/theme";
import styled from "styled-components";
import Popup from "../common/Popup";
import { useEffect, useState } from "react";
import Axios from "@/apis/axios";

interface MealTable {
  date: string;
  foods: { food: string; warning: boolean }[];
}

const MenuCard = ({
  date,
  foods,
}: {
  date: string;
  foods: { food: string; warning: boolean }[];
}) => {
  let day = date.slice(-2);
  if (day[0] === "0") {
    day = day[1];
  }

  return (
    <Card>
      <DateBox>{day}일</DateBox>
      <Menus>
        {foods.map((item, index) => (
          <MenuItem key={index} $warning={item.warning}>
            {item.food}
          </MenuItem>
        ))}
      </Menus>
    </Card>
  );
};

const MealTablePopup = ({ onClose }: { onClose: () => void }) => {
  /* 전체 급식 데이터 */
  const [mealTable, setMealTable] = useState<MealTable[]>([]);
  /* 주간별 급식 데이터 */
  const [weeklyMealTable, setWeeklyMealTable] = useState<MealTable[][]>([]);
  /* 매달 시작 요일 */
  const [dayOfWeek, setDayOfWeek] = useState<string>("");

  let remainingDays = 0;

  useEffect(() => {
    Axios.get(`/api/v1/menus/month`)
      .then((response) => {
        const mealTableData: MealTable[] = response.data.menus;
        setMealTable(mealTableData);

        const dayNames = ["월", "화", "수", "목", "금", "토", "일"];
        const date = new Date(mealTableData[0].date);
        const dayOfWeek = dayNames[date.getDay()];
        setDayOfWeek(dayOfWeek);

        // 첫 번째 주차의 데이터 개수 결정
        if (dayOfWeek === "월") {
          remainingDays = 5;
        } else if (dayOfWeek === "화") {
          remainingDays = 4;
        } else if (dayOfWeek === "수") {
          remainingDays = 3;
        } else if (dayOfWeek === "목") {
          remainingDays = 2;
        } else if (dayOfWeek === "금") {
          remainingDays = 1;
        }

        const weeklyMealTable: MealTable[][] = [];
        if (remainingDays > 0) {
          weeklyMealTable.push(mealTableData.slice(0, remainingDays));
        }

        for (let i = remainingDays; i < mealTableData.length; i += 5) {
          weeklyMealTable.push(mealTableData.slice(i, i + 5));
        }

        setWeeklyMealTable(weeklyMealTable);
      })
      .catch(() => {
        console.error("Monthly Meal Table Get Error");
      });
  }, []);

  return (
    <Popup onClose={onClose} title="5월 급식표" height="716px">
      <StyledTable>
        {weeklyMealTable.map((week, weekIndex) => (
          <>
            <Title>5월 {weekIndex + 1}주차</Title>
            <Week key={weekIndex}>
              {week.map((data, index) => (
                <MenuCard key={index} date={data.date} foods={data.foods} />
              ))}
            </Week>
          </>
        ))}
      </StyledTable>
    </Popup>
  );
};

export default MealTablePopup;

const StyledTable = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  ${(props) => props.theme.fonts.body2_b}
  border-radius: 12px 12px 0px 0px;
  position: sticky;
  top: 0;
  background: ${theme.colors.white};
  z-index: 1;
`;

const Week = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 20px;
`;

const Card = styled.div`
  height: 50px;
  display: flex;
  flex-direction: row;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid ${theme.colors.b200};
  gap: 11px;
  background: ${theme.colors.b50};
  text-align: left;
`;

const DateBox = styled.div`
  width: 30px;
  ${(props) => props.theme.fonts.caption1_b};
  display: flex;
  text-align: center;
  align-items: center;
`;

const Menus = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 5px;
  flex-wrap: wrap;
`;

const MenuItem = styled.span<{ $warning: boolean }>`
  color: ${({ $warning, theme }) => $warning && theme.colors.primary500};
  ${(props) => props.theme.fonts.caption1_r};
  white-space: nowrap;
  line-height: 100%;
`;
