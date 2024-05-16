import styled from "styled-components";

interface filterProps {
  id: string;
  category: string;
  selected: string;
}

const Filter = (props: filterProps) => {
  const { id, category, selected } = props;
  return <Box $selected={id === selected}>{category}</Box>;
};

export default Filter;

const Box = styled.div<{ $selected: boolean }>`
  height: 30px;
  padding: 6px 12px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  color: ${({ $selected, theme }) =>
    $selected ? theme.colors.primary500 : theme.colors.b500};
  ${(props) => props.theme.fonts.body3_m};
  font-weight: ${(props) => (props.$selected ? 700 : 500)};
  border: 1px solid
    ${({ $selected, theme }) =>
      $selected ? theme.colors.primary500 : theme.colors.b300};
  background: ${(props) =>
    props.$selected ? "rgba(255, 135, 0, 0.15)" : "white"};
  cursor: pointer;
`;
