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
      {foods.map((item, index) => (
        <MenuItem key={index} $warning={item.warning}>
          {item.food}
        </MenuItem>
      ))}
    </Card>
  );
};

const MealTablePopup = ({ onClose }: { onClose: () => void }) => {
  const [mealTable, setMealTable] = useState<MealTable[]>([]);

  useEffect(() => {
    Axios.get(`/api/v1/menus/month`)
      .then((response) => {
        const mealTableData: MealTable[] = response.data.menus;
        setMealTable(mealTableData);
        console.log("Monthly Meal Table Get Success:", response.data);
      })
      .catch(() => {
        console.error("Monthly Meal Table Get Error");
      });
  }, []);

  return (
    <Popup onClose={onClose} title="4월 급식표" height="716px">
      <Day>
        {["월", "화", "수", "목", "금"].map((day, index) => (
          <div key={index}>{day}</div>
        ))}
      </Day>
      <StyledTable>
        {mealTable.map((data, index) => (
          <MenuCard key={index} date={data.date} foods={data.foods} />
        ))}
      </StyledTable>
    </Popup>
  );
};

export default MealTablePopup;

const Day = styled.div`
  width: 100%;
  padding: 14px 0px 4px 0px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  color: ${theme.colors.b400};
  text-align: center;
  ${(props) => props.theme.fonts.caption1_m}
`;

const StyledTable = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  place-items: center;
  gap: 9px;
`;

const Card = styled.div`
  height: 160px;
  display: flex;
  flex-direction: column;
  padding: 4px 4px 20px 4px;
  border-radius: 8px;
  border: 1px solid ${theme.colors.b200};
  background: ${theme.colors.b50};
  text-align: left;
  overflow: scroll;
`;

const Date = styled.div`
  margin-bottom: 8px;
  ${(props) => props.theme.fonts.caption1_b}
  text-align: center;
`;

const MenuItem = styled.div<{ $warning: boolean }>`
  color: ${({ $warning, theme }) => $warning && theme.colors.primary500};
  ${(props) => props.theme.fonts.caption1_r};
`;
