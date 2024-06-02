import { useEffect } from "react";
import styled from "styled-components";

interface filterProps {
  id: string;
  category: string;
  selected: string;
  onChange: (id: string) => void;
}

const Filter = (props: filterProps) => {
  const { id, category, selected, onChange } = props;

  const handleClick = () => {
    onChange(id);
  };

  return (
    <label>
      <input
        type="radio"
        name="category"
        value={id}
        checked={selected === id}
        onChange={handleClick}
        hidden
      />
      <Box $selected={selected === id}>{category}</Box>
    </label>
  );
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
