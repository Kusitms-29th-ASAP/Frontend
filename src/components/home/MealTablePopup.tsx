import { theme } from "@/styles/theme";
import styled from "styled-components";
import Popup from "../common/Popup";
import { useEffect, useState } from "react";
import Axios from "@/apis/axios";
import { dayText, monthText, weekText } from "@/data/mealData";

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

  const [language, setLanguage] = useState<string>("ko");

  useEffect(() => {
    setLanguage(localStorage.getItem("language") || "ko");
  }, []);

  return (
    <Card>
      <DateBox>{dayText(day, language)}</DateBox>
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
  const [language, setLanguage] = useState<string>("ko");

  useEffect(() => {
    setLanguage(localStorage.getItem("language") || "ko");
  }, []);

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

        mealTableData.forEach((meal) => {
          const mealDate = new Date(meal.date);
          const mealDayOfWeek = mealDate.getDay();

          /* 주차별로 월요일에 새로운 주차를 시작 */
          if (mealDayOfWeek === 1 && currentWeek.length > 0) {
            weeklyMealTable.push(currentWeek);
            currentWeek = [];
          }

          currentWeek.push(meal);

          /* 마지막 날에 현재 주차 데이터를 추가 */
          const lastMealDate = new Date(
            mealTableData[mealTableData.length - 1].date
          );
          if (
            mealDayOfWeek === 5 ||
            mealDate.getTime() === lastMealDate.getTime()
          ) {
            weeklyMealTable.push(currentWeek);
            currentWeek = [];
          }
        });

        setWeeklyMealTable(weeklyMealTable);
      })
      .catch(() => {
        console.error("Monthly Meal Table Get Error");
      });
  }, []);

  return (
    <Popup
      onClose={onClose}
      title={`${monthText(month, language)}`}
      height="716px"
    >
      <StyledTable>
        {weeklyMealTable.map((week, weekIndex) => (
          <>
            <Title>{weekText(month, weekIndex + 1, language)}</Title>
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
  height: auto;
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
