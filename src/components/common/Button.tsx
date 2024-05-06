import { theme } from "@/styles/theme";
import React, { ReactNode } from "react";
import styled from "styled-components";

export type buttonType = "primary" | "primaryLight" | "primaryBorder";

type ButtonTypes = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export interface ButtonProps extends ButtonTypes {
  text: ReactNode;
  buttonType?: buttonType;
  size?: "large" | "medium" | "small";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties & { fontSize?: string };
  disabled?: boolean;
}

const Button = (props: ButtonProps) => {
  const {
    text,
    buttonType = "primary",
    size,
    icon,
    iconPosition = "left",
    onClick,
    style,
    disabled,
  } = props;

  let buttonClassName = buttonType;
  if (buttonType === "primary") {
    buttonClassName += " primary";
  } else if (buttonType === "primaryLight") {
    buttonClassName += " primaryLight";
  } else if (buttonType === "primaryBorder") {
    buttonClassName += " primaryBorder";
  }

  if (size === "large") {
    buttonClassName += " large";
  } else if (size === "medium") {
    buttonClassName += " medium";
  } else if (size === "small") {
    buttonClassName += " small";
  }

  return (
    <StyledButton
      className={buttonClassName}
      style={style}
      iconPosition={iconPosition}
      onClick={onClick}
      disabled={disabled}
    >
      <IconLeft>{icon && iconPosition === "left" && icon}</IconLeft>
      {text}
      <IconRight>{icon && iconPosition === "right" && icon}</IconRight>
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
  flex-shrink: 0;
  border: none;
  border-radius: 0.5rem;
  ${(props) => props.theme.fonts.body3_m};
  white-space: nowrap;
  cursor: pointer;
  gap: 10px;
  transition:
    color 200ms,
    background-color 200ms;

  /* buttonType */
  &.primary {
    color: ${theme.colors.white};
    background: ${theme.colors.primary500};
    &:hover {
      background: ${theme.colors.primary800};
    }
    &:active {
      background: ${theme.colors.primary800};
    }
    &:disabled {
      color: ${theme.colors.b400};
      background: ${theme.colors.b200};
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

const IconLeft = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
`;

const IconRight = styled.div`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
`;
