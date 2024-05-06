import { theme } from "@/styles/theme";
import { ReactNode } from "react";
import styled from "styled-components";

interface CardProps {
  sub: ReactNode;
  main: ReactNode;
}
const Card = ({ sub, main }: CardProps) => {
  return (
    <StyledCard>
      <Sub>{sub}</Sub>
      {main}
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
