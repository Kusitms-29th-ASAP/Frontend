import { mealTableData } from "@/data/homeData";
import { theme } from "@/styles/theme";
import Image from "next/image";
import styled from "styled-components";

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
    <StyledMealTable>
      <Title>
        4월 급식표
        <Image
          src="/assets/icons/ic_close.svg"
          alt="close"
          width={24}
          height={24}
          onClick={onClose}
        />
      </Title>
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
    </StyledMealTable>
  );
};

export default MealTablePopup;

const StyledMealTable = styled.div`
  width: 480px;
  height: 716px;
  padding: 20px 20px 28px 20px;
  border-radius: 12px 12px 0px 0px;
  background: ${theme.colors.white};
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 200;
  color: ${theme.colors.b700};
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px 24px 0px 24px;
  ${(props) => props.theme.fonts.body1_b}
`;

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
  line-height: 138%;
  ${(props) => props.theme.fonts.caption1_r}
`;
