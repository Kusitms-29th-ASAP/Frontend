import { theme } from "@/styles/theme";
import { ReactNode } from "react";
import styled from "styled-components";

export interface ListBoxProps {
  index: ReactNode;
  text: ReactNode;
}

const ListNumber = (props: ListBoxProps) => {
  const { index, text } = props;
  return (
    <StyledListNumber>
      <Number>{index}</Number>
      <Text>{text}</Text>
    </StyledListNumber>
  );
};

export default ListNumber;

const StyledListNumber = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;

const Number = styled.div`
  display: inline-flex;
  width: 24px;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: rgba(255, 135, 0, 0.15);
  color: ${theme.colors.primary700};
  ${(props) => props.theme.fonts.caption1_b}
`;

const Text = styled.div`
  color: ${theme.colors.b600};
  ${(props) => props.theme.fonts.body3_r};
`;
