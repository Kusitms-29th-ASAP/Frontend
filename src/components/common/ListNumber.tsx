import { theme } from "@/styles/theme";
import styled from "styled-components";

export interface ListNumberProps {
  index: number;
  text: string;
  onClick?: () => void;
}

const ListNumber = (props: ListNumberProps) => {
  const { index, text, onClick } = props;

  return (
    <StyledListNumber onClick={onClick}>
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
  cursor: ${(props) => (props.onClick ? "pointer" : "default")};
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
