import { theme } from "@/styles/theme";
import styled from "styled-components";
import Image from "next/image";

export interface CheckBoxProps {
  checkboxType?: "checkbox" | "grayCheckbox" | "checkBtn" | "checkArrow";
  value?: string;
  label?: string;
  text?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  essential?: boolean;
  color?: "primary" | "gray" | "black";
}

const Checkbox = (props: CheckBoxProps) => {
  const {
    checkboxType = "checkbox",
    value,
    label,
    text,
    checked,
    onChange,
    essential,
    color = "gray",
  } = props;

  let checkboxClassName = checkboxType;
  if (color) {
    checkboxClassName += " " + color;
  }

  return (
    <CheckBoxLayout className={checkboxClassName} $check={checked || false}>
      <CheckboxContainer
        essential={essential ? true : false}
        checked={checked || false}
      >
        <CheckboxInput
          className={checkboxClassName}
          value={value}
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        {label}
        <span className={checkboxClassName}>{text}</span>
      </CheckboxContainer>
      {checkboxType === "checkArrow" && (
        <Image
          src="/assets/common/right_arrow.svg"
          alt="arrow"
          width={20}
          height={20}
        />
      )}
    </CheckBoxLayout>
  );
};

export default Checkbox;

const CheckBoxLayout = styled.div<{ $check: boolean }>`
  &.checkArrow {
    width: 100%;
    display: flex;
    align-items: center;
    user-select: none;
    padding: 0 12px;
    cursor: pointer;
  }

  &.checkBtn {
    width: 100%;
    padding: 15px 6px;
    border-radius: 10px;
    background: rgba(255, 135, 0, 0.05);
    white-space: nowrap;

    img {
      display: none;
    }
    border: ${({ $check }) =>
      $check
        ? `1px solid ${theme.colors.primary300}`
        : "1px solid transparent"};
  }

  /* color */
  &.primary {
    color: ${theme.colors.b700};
    ${({ theme }) => theme.fonts.body3_m};
  }
  &.gray {
    color: ${(props) =>
      props.$check ? `${theme.colors.primary500}` : `${theme.colors.b500}`};
    ${({ theme }) => theme.fonts.body2_m};
  }
  &.black {
    color: ${theme.colors.b700};
    ${({ theme }) => theme.fonts.body1_b};
  }
`;

const CheckboxContainer = styled.label<{
  essential: boolean;
  checked: boolean;
}>`
  display: flex;
  align-items: center;
  flex-grow: 1;
  cursor: pointer;

  span {
    margin-left: 8px;
    ${({ theme }) => theme.fonts.caption1_m};
    color: ${(props) =>
      props.essential ? theme.colors.primary500 : theme.colors.b400};

    &.grayCheckbox {
      color: ${(props) =>
        props.checked ? theme.colors.primary500 : theme.colors.b500};
    }
  }
`;

const CheckboxInput = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  background-image: url("data:image/svg+xml; base64, PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcng9IjQiIGZpbGw9IiNGRkUyQzIiLz4NCjxwYXRoIGQ9Ik0xNCA3TDguNSAxMi41TDYgMTAiIHN0cm9rZT0iI0ZGRDA5QyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4NCjwvc3ZnPg==");
  background-size: 100% 100%;
  background-position: 50%;
  background-repeat: no-repeat;
  border-radius: 0.35rem;
  margin-right: 16px;
  cursor: pointer;

  &.grayCheckbox {
    margin-right: 0px;
    background: ${theme.colors.b200};
    background-image: url("/assets/icons/ic_checkbox_gray.svg");

    &:hover {
      box-shadow: 0 0 0 max(2px, 0.3em) ${theme.colors.b100};
    }

    &:checked {
      &:hover {
        box-shadow: 0 0 0 max(2px, 0.3em) ${theme.colors.primary100};
      }
    }
  }

  &:hover {
    box-shadow: 0 0 0 max(2px, 0.3em) ${theme.colors.primary100};
  }

  &:checked {
    background-image: url("data:image/svg+xml; base64, PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcng9IjQiIGZpbGw9IiNGMTdEMkEiLz4NCjxwYXRoIGQ9Ik0xNCA3TDguNSAxMi41TDYgMTAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+DQo8L3N2Zz4NCg0K");
  }
`;
