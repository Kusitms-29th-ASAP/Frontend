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
      <Date>{day}일</Date>
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
  const [mealTable, setMealTable] = useState<MealTable[]>([]);
  const [weeklyMealTable, setWeeklyMealTable] = useState<MealTable[][]>([]);

  useEffect(() => {
    Axios.get(`/api/v1/menus/month`)
      .then((response) => {
        const mealTableData: MealTable[] = response.data.menus;
        setMealTable(mealTableData);
        const groupedByWeek = groupByWeek(mealTableData);
        setWeeklyMealTable(groupedByWeek);
        // console.log("Monthly Meal Table Get Success:", response.data);
      })
      .catch(() => {
        // console.error("Monthly Meal Table Get Error");
      });
  }, []);

  const groupByWeek = (mealTable: MealTable[]) => {
    const weeks: MealTable[][] = [];
    let currentWeek: MealTable[] = [];
    // let dayOfWeek = new Date(mealTable[0]?.date).getDay();

    let dayOfWeek = "월";
    mealTable.forEach((meal) => {
      // const currentDayOfWeek = new Date(meal.date).getDay();
      const currentDayOfWeek = "수";
      if (currentDayOfWeek < dayOfWeek) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
      currentWeek.push(meal);
      dayOfWeek = currentDayOfWeek;
    });

    if (currentWeek.length > 0) {
      weeks.push(currentWeek);
    }

    return weeks;
  };

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
  margin-bottom: 4px;
  ${(props) => props.theme.fonts.body1_b}
  padding: 20px;
  border-radius: 12px 12px 0px 0px;
  position: sticky;
  top: 0;
  background: ${theme.colors.white};
  z-index: 1;
`;

const Week = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
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

const Date = styled.div`
  ${(props) => props.theme.fonts.caption1_b}
  text-align: center;
`;

const Menus = styled.div`
  width: 269px;
  display: flex;
  gap: 5px;
`;

const MenuItem = styled.span<{ $warning: boolean }>`
  color: ${({ $warning, theme }) => $warning && theme.colors.primary500};
  ${(props) => props.theme.fonts.caption1_r};
  white-space: nowrap;
`;
