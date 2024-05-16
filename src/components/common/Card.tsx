import { theme } from "@/styles/theme";
import styled from "styled-components";

export type CardType = "timetable" | "date";
export type CardColor = "white" | "orange";

export interface CardProps {
  sub: string;
  main: string;
  type?: CardType;
  color?: CardColor;
}
const Card = ({
  sub,
  main,
  color = "orange",
  type = "timetable",
}: CardProps) => {
  let cardClassName = color;
  if (type === "timetable") {
    cardClassName += " timetable";
  } else if (type === "date") {
    cardClassName += " date";
  }

  return (
    <StyledCard className={cardClassName}>
      <Sub>{sub}</Sub>
      <Main>{main}</Main>
    </StyledCard>
  );
};

export default Card;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px 12px;
  border-radius: 8px;
  text-align: center;
  white-space: nowrap;

  &.white {
    background: ${theme.colors.white};
    color: ${theme.colors.primary500};
  }
  &.orange {
    background: ${theme.colors.primary500};
    color: ${theme.colors.white};

    &:disabled {
      background: ${theme.colors.b100};
      color: ${theme.colors.b300};
    }
  }

  &.timetable {
    gap: 2px;
    justify-content: start;
  }
  &.date {
    gap: 4px;
    justify-content: center;
  }
`;

const Sub = styled.div`
  &.timetable {
    ${(props) => props.theme.fonts.caption1_r};
  }
  &.date {
    ${(props) => props.theme.fonts.body3_r};
  }
`;

const Main = styled.div`
  ${(props) => props.theme.fonts.body3_b};
`;
