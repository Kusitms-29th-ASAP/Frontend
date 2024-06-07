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
  const [month, setMonth] = useState<string>("");

  useEffect(() => {
    Axios.get(`/api/v1/menus/month`)
      .then((response) => {
        const mealTableData: MealTable[] = response.data.menus;
        setMealTable(mealTableData);
        console.log(mealTableData);
        /* 월 계산 */
        let month = mealTableData[0].date.slice(5, 7);
        if (month[0] === "0") {
          month = month[1];
        }
        setMonth(month);

        const weeklyMealTable: MealTable[][] = [];
        let currentWeek: MealTable[] = [];
        /* 주차별 시작일 */
        let currentWeekStartDay: number | null = null;

        mealTableData.forEach((meal) => {
          const mealDate = new Date(meal.date);
          const mealDay = mealDate.getDate();
          const mealDayOfWeek = mealDate.getDay();

          /* 이번 주차 시작일 */
          if (currentWeekStartDay === null) {
            currentWeekStartDay = mealDay;
          }

          /* 이번 주차에 있는 날짜인지 확인 */
          if (
            (currentWeekStartDay !== null &&
              mealDay >= currentWeekStartDay &&
              mealDay < currentWeekStartDay + 6 &&
              mealDayOfWeek !== 0) || // 일요일 제외
            currentWeek.length === 0
          ) {
            currentWeek.push(meal);
          } else {
            weeklyMealTable.push(currentWeek);
            currentWeek = [meal];
            currentWeekStartDay = mealDay;
          }
        });

        if (currentWeek.length > 0) {
          weeklyMealTable.push(currentWeek);
        }

        setWeeklyMealTable(weeklyMealTable);
      })
      .catch(() => {
        console.error("Monthly Meal Table Get Error");
      });
  }, []);

  return (
    <Popup onClose={onClose} title={`${month}월 급식표`} height="716px">
      <StyledTable>
        {weeklyMealTable.map((week, weekIndex) => (
          <>
            <Title>
              {month}월 {weekIndex + 1}주차
            </Title>
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
