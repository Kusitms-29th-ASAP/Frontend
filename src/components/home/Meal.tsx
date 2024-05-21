import { theme } from "@/styles/theme";
import styled from "styled-components";
import TimeTable from "./TimeTable";
import MealTable from "./MealTable";

const Meal = () => {
  return (
    <Box>
      <Top>
        <Title>
          오늘 시간표,
          <br />
          급식 정보를 한 눈에!
        </Title>
      </Top>
      <TimeTable />
      <MealTable />
    </Box>
  );
};

export default Meal;

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 26px;
  padding: 16px 0px 127px 0px;
  gap: 31px;
  background-color: ${theme.colors.white};
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

const Title = styled.div`
  color: ${theme.colors.b700};
  ${(props) => props.theme.fonts.heading2_b};
  letter-spacing: -0.4px;
`;
