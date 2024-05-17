import { theme } from "@/styles/theme";
import styled from "styled-components";

export interface CardProps {
  time: number;
  subject: string;
}

const Card = ({ time, subject }: CardProps) => {
  return (
    <StyledCard>
      <Sub>{time}교시</Sub>
      {subject}
    </StyledCard>
  );
};

export default Card;

const StyledCard = styled.div`
  width: 49px;
  height: 73px;
  display: inline-flex;
  flex-direction: column;
  text-align: center;
  gap: 2px;
  padding: 4px;
  border-radius: 8px;
  background: ${theme.colors.primary500};
  color: ${theme.colors.white};
  ${(props) => props.theme.fonts.body3_b};

  &:disabled {
    background: ${theme.colors.b100};
    color: ${theme.colors.b300};
  }
`;

const Sub = styled.div`
  ${(props) => props.theme.fonts.caption1_r};
`;
