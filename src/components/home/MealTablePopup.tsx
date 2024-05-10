import { mealTableData } from "@/data/homeData";
import { theme } from "@/styles/theme";
import styled from "styled-components";
import Popup from "../common/Popup";

const MenuCard = ({ date, menu }: { date: number; menu: string[] }) => {
  return (
    <Card>
      <Date>{date}일</Date>
      {menu.map((item: string, index: number) => (
        <MenuItem key={index}>{item}</MenuItem>
      ))}
    </Card>
  );
};

const MealTablePopup = ({ onClose }: { onClose: () => void }) => {
  return (
    <Popup onClose={onClose} title="4월 급식표" height="716px">
      <Day>
        {["월", "화", "수", "목", "금"].map((day, index) => (
          <div key={index}>{day}</div>
        ))}
      </Day>
      <StyledTable>
        {mealTableData.map((data, index) => (
          <MenuCard key={index} date={data.date} menu={data.menu} />
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
  display: flex;
  flex-direction: column;
  padding: 4px 4px 20px 4px;
  border-radius: 8px;
  border: 1px solid ${theme.colors.b200};
  background: ${theme.colors.b50};
  text-align: left;
`;

const Date = styled.div`
  margin-bottom: 8px;
  ${(props) => props.theme.fonts.caption1_b}
  text-align: center;
`;

const MenuItem = styled.div`
  ${(props) => props.theme.fonts.caption1_r}
`;
