import { theme } from "@/styles/theme";
import styled from "styled-components";
import Image from "next/image";

export type checkboxType = "checkbox" | "checkBtn";

export interface CheckBoxProps {
  value?: string | number;
  label?: string;
  text?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checkboxType?: string;
  essential?: boolean;
}

const Checkbox: React.FC<CheckBoxProps> = ({
  value,
  label,
  text,
  checked,
  onChange,
  checkboxType,
  essential,
}) => {
  return (
    <CheckBoxLayout
      className={checkboxType === "checkBtn" ? "checkBtn" : ""}
      checked={checked}
    >
      <CheckboxContainer essential={essential ? true : false} checked={checked}>
        <CheckboxInput
          value={value}
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        {label}
        <span>{text}</span>
      </CheckboxContainer>
      <Image
        src="/assets/common/right_arrow.svg"
        alt="arrow"
        width={20}
        height={20}
      />
    </CheckBoxLayout>
  );
};

export default Checkbox;

const CheckBoxLayout = styled.div<CheckBoxProps>`
  display: flex;
  align-items: center;
  user-select: none;
  padding: 0 12px;
  color: ${theme.colors.b700};
  ${({ theme }) => theme.fonts.body3_m};
  cursor: pointer;

  &.checkBtn {
    padding: 15px 12px;
    ${({ theme }) => theme.fonts.body1_b};
    color: ${theme.colors.b700};
    background-color: rgba(255, 135, 0, 0.05);
    border-radius: 10px;
    img {
      display: none;
    }
    border: ${(props) =>
      props.checked ? `1px solid ${theme.colors.primary300}` : ``};
  }
`;

const CheckboxContainer = styled.label<CheckBoxProps>`
  display: flex;
  align-items: center;
  flex-grow: 1;
  cursor: pointer;

  span {
    margin-left: 8px;
    ${({ theme }) => theme.fonts.caption1_m};
    color: ${(props) =>
      props.essential ? theme.colors.primary500 : theme.colors.b400};
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
  margin-right: 16px;

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
