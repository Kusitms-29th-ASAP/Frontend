import { theme } from "@/styles/theme";
import styled from "styled-components";

export type checkboxType = "checkbox" | "checkBtn";

export interface CheckBoxProps {
  value?: string | number;
  label?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checkboxType?: string;
}

const Checkbox: React.FC<CheckBoxProps> = ({
  value,
  label,
  checked,
  onChange,
  checkboxType,
}) => {
  return (
    <CheckboxContainer
      className={checkboxType === "checkBtn" ? "checkBtn" : ""}
    >
      <CheckboxInput
        value={value}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      {label}
    </CheckboxContainer>
  );
};

export default Checkbox;

const CheckboxContainer = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  user-select: none;
  margin-right: 0.5rem;
  &.checkBtn {
    width: 101px;
    height: 48px;
    gap: 10px;
    white-space: nowrap;
    color: ${theme.colors.b500};
    background-color: rgba(255, 135, 0, 0.05);
    border: 1px solid ${theme.colors.primary300};
    border-radius: 10px;
    padding: 14px 12px;
    &:checked {
      color: ${theme.colors.primary500};
    }
  }
`;

const CheckboxInput = styled.input`
  appearance: none;
  width: 1.3rem;
  height: 1.3rem;
  border: 2px solid ${theme.colors.primary50};
  background-color: ${theme.colors.primary50};
  background-image: url("data:image/svg+xml; base64, PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcng9IjQiIGZpbGw9IiNGRkUyQzIiLz4NCjxwYXRoIGQ9Ik0xNCA3TDguNSAxMi41TDYgMTAiIHN0cm9rZT0iI0ZGRDA5QyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4NCjwvc3ZnPg==");
  background-size: 100% 100%;
  background-position: 50%;
  border-radius: 0.35rem;
  margin-right: 0.5rem;

  &:hover {
    box-shadow: 0 0 0 max(2px, 0.3em) ${theme.colors.primary100};
    cursor: pointer;
  }

  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml; base64, PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcng9IjQiIGZpbGw9IiNGMTdEMkEiLz4NCjxwYXRoIGQ9Ik0xNCA3TDguNSAxMi41TDYgMTAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+DQo8L3N2Zz4NCg0K");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: ${theme.colors.primary600};
  }
`;
