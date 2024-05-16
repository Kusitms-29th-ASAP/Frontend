import { theme } from "@/styles/theme";
import React, { ReactNode } from "react";
import styled from "styled-components";

export type ButtonType = "primary" | "primaryLight" | "primaryBorder";
export type ButtonSize = "large" | "medium" | "small";
export type IconPosition = "left" | "right";

export interface ButtonProps {
  type?: ButtonType;
  text: string;
  size?: ButtonSize;
  icon?: ReactNode;
  iconPosition?: IconPosition;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties & { fontSize?: string };
  disabled?: boolean;
}

const Button = (props: ButtonProps) => {
  const {
    text,
    type = "primary",
    size,
    icon,
    iconPosition = "left",
    onClick,
    style,
    disabled,
  } = props;

  let buttonClassName = type;
  if (size) {
    buttonClassName += " " + size;
  }

  return (
    <StyledButton
      className={buttonClassName}
      style={style}
      iconPosition={iconPosition}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && iconPosition && <Icon $iconPosition={iconPosition}>{icon}</Icon>}
      {text}
    </StyledButton>
  );
};

export default Button;

interface StyledButtonProps {
  iconPosition: "left" | "right";
}

const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  width: 100%;
  padding: 16px 28px;
  position: relative;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 5px;
  ${(props) => props.theme.fonts.body3_m};
  white-space: nowrap;
  cursor: pointer;
  gap: 10px;
  transition:
    color 200ms,
    background-color 200ms;

  &:disabled {
    color: ${theme.colors.b400};
    background: ${theme.colors.b200};
  }

  /* type */
  &.primary {
    color: ${theme.colors.white};
    background: ${theme.colors.primary500};
    &:hover {
      background: ${theme.colors.primary800};
    }
    &:active {
      background: ${theme.colors.primary800};
    }
  }
  &.primaryLight {
    color: ${theme.colors.primary500};
    background: rgba(255, 135, 0, 0.15);
    &:hover {
      background: rgba(255, 135, 0, 0.3);
    }
    &:active {
      background: rgba(255, 135, 0, 0.3);
    }
  }
  &.primaryBorder {
    justify-content: flex-start;
    padding: 12px 11px;
    color: ${theme.colors.b600};
    background: ${theme.colors.b50};
    border: 1px solid ${theme.colors.b100};
    border-radius: 8px;
    &:hover {
      color: ${theme.colors.primary500};
      background: #ff870026;
      border: 1px solid ${theme.colors.primary500};
    }
    &:active {
      background: ${theme.colors.primary50};
    }
  }

  /* size */
  &.large {
    padding: 16px 28px;
    ${(props) => props.theme.fonts.body3_m};
  }

  &.medium {
    width: 236px;
    height: 44px;
    padding: 14px 12px;
    ${(props) => props.theme.fonts.caption1_m};
  }

  &.small {
    width: 72px;
    height: 44px;
    justify-content: center;
    border-radius: 10px;
    ${(props) => props.theme.fonts.caption1_m};
  }
`;

const Icon = styled.div<{ $iconPosition: string }>`
  position: absolute;
  ${({ $iconPosition }) => `${$iconPosition}: 12px;`}
  top: 50%;
  transform: translateY(-50%);
`;
