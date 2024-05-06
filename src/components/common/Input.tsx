import { theme } from "@/styles/theme";
import React from "react";
import styled from "styled-components";
import Image from "next/image";

export interface InputProps {
  value: string;
  onChange: (value: string) => void;
  onClick?: () => void;
  placeholder?: string;
  inputType?: "text" | "select";
}

const Input: React.FC<InputProps> = (props: InputProps) => {
  const { value, onChange, onClick, placeholder, inputType = "text" } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  let inputClassName = inputType;

  return (
    <Container>
      <StyledInput
        type="text"
        value={value}
        onChange={handleChange}
        onClick={handleClick}
        placeholder={placeholder}
        className={inputClassName}
      />
      {inputType === "select" && (
        <ImageContainer>
          <Image
            src="/assets/common/down_arrow.svg"
            alt="arrow"
            width={20}
            height={20}
          />
        </ImageContainer>
      )}
    </Container>
  );
};

export default Input;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const StyledInput = styled.input<InputProps>`
  width: 100%;
  height: 44px;
  padding: 14px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  border: 1px solid ${theme.colors.primary100};
  background: rgba(255, 135, 0, 0.05);
  color: ${theme.colors.b700};
  outline: none;
  ${(props) => props.theme.fonts.caption1_m};
  &::placeholder {
    color: ${theme.colors.b400};
    ${(props) => props.theme.fonts.caption1_m};
  }

  /* type */
  &.select {
    cursor: pointer;
    caret-color: transparent;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: -30px;
  cursor: pointer;
`;
