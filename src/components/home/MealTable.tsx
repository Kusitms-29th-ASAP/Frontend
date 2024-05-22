import { mealData } from "@/data/homeData";
import { theme } from "@/styles/theme";
import { useEffect, useState } from "react";
import styled from "styled-components";
import MealTablePopup from "./MealTablePopup";
import More from "../common/More";
import Axios from "@/apis/axios";
import Image from "next/image";

interface Food {
  food: string;
  warning: boolean;
}

interface Meal {
  foods: Food[];
}

const MealTable = () => {
  const [mealToday, setMealToday] = useState<Meal>({ foods: [] });
  const [mealTable, setMealTable] = useState(false);

  const handleOpenMealTable = () => {
    setMealTable(true);
  };

  const handleCloseMealTable = () => {
    setMealTable(false);
  };

  useEffect(() => {
    Axios.get(`/api/v1/menus/today`)
      .then((response) => {
        const mealToday: Meal = response.data;
        setMealToday(mealToday);
        // console.log("Today Meal Table Get Success:", response.data);
      })
      .catch(() => {
        // console.error("Today Meal Table Get Error");
      });
  }, []);

  return (
    <MealContainer>
      <Title>
        오늘의 급식
        <More onClick={handleOpenMealTable} />
      </Title>
      <TableContainer>
        {mealToday.foods.length > 0 ? (
          mealToday.foods.map((data, index) => (
            <List key={index} $warning={data.warning}>
              {data.food}
              {data.warning && (
                <Caution>
                  자녀가 주의해야 할 메뉴예요
                  <Image
                    src="/assets/icons/ic_alert.svg"
                    width={16}
                    height={16}
                    alt="alert"
                  />
                </Caution>
              )}
            </List>
          ))
        ) : (
          <NoData>급식 정보가 없어요 :(</NoData>
        )}
      </TableContainer>
      {mealTable && <MealTablePopup onClose={handleCloseMealTable} />}
      {mealTable && <Overlay onClick={handleCloseMealTable} />}
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
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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

const List = styled.div<{ $warning: boolean }>`
  width: 100%;
  height: 32px;
  border-radius: 8px;
  background: ${({ $warning, theme }) =>
    $warning ? "rgba(255, 135, 0, 0.15)" : theme.colors.b100};
  padding: 6px 12px;
  color: ${({ $warning, theme }) =>
    $warning ? theme.colors.primary500 : theme.colors.b600};
  ${({ $warning }) => ($warning ? theme.fonts.body3_b : theme.fonts.body3_r)};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Caution = styled.div`
  display: flex;
  align-items: center;
  ${(props) => props.theme.fonts.caption3_r};
  gap: 2px;
`;

const Overlay = styled.div`
  max-width: 480px;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.6);
  z-index: 10;
`;

const NoData = styled.div`
  ${(props) => props.theme.fonts.body3_m};
`;
