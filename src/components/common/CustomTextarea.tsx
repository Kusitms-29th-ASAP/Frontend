import { theme } from "@/styles/theme";
import React from "react";
import styled from "styled-components";

export interface CustomTextareaProps {
  value: any;
  onChange: (value: any) => void;
  onClick?: () => void;
  placeholder?: string;
  readonly?: boolean;
  disabled?: boolean;
  clicked?: boolean;
  hidden?: boolean;
  height?: number;
}

const CustomTextarea = (props: CustomTextareaProps) => {
  const {
    value,
    onChange,
    onClick,
    placeholder,
    readonly = false,
    disabled = false,
    clicked,
    hidden = false,
    height,
  } = props;

  const handleChange = (event: any) => {
    onChange(event.target.value);
  };
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Container onClick={handleClick}>
      <StyledTextarea
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        readOnly={readonly}
        disabled={disabled}
        onClick={onClick}
        clicked={clicked}
        hidden={hidden}
        height={height}
      />
    </Container>
  );
};

export default CustomTextarea;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const StyledTextarea = styled.textarea<CustomTextareaProps>`
  width: 100%;
  height: ${(props) => (props.height ? props.height + "px" : "44px")};
  padding: 14px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  border: 1px solid ${theme.colors.primary100};
  background: ${(props) => (props.value ? "rgba(255, 135, 0, 0.05)" : "white")};
  color: ${(props) =>
    props.hidden ? "rgba(255, 135, 0, 0.01)" : theme.colors.b700};
  ${(props) => props.theme.fonts.body3_m};
  outline: none;
  ${(props) => props.theme.fonts.caption1_m};

  &::placeholder {
    color: ${theme.colors.b400};
    ${(props) => props.theme.fonts.caption1_m};
  }

  &.select {
    cursor: pointer;
    caret-color: transparent;
  }

  &:disabled {
    border: none;
    color: ${theme.colors.b400};
    background: ${theme.colors.b100};
  }

  ${(props) =>
    props.clicked &&
    `
    border: 1px solid ${theme.colors.primary500};
    background: rgba(255, 135, 0, 0.10);
  `}

  &:focus {
    border: 1px solid ${theme.colors.primary500};
    background: rgba(255, 135, 0, 0.1);
  }
`;
