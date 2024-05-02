import { theme } from "@/styles/theme";
import React from "react";
import styled from "styled-components";

export interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ value, onChange, placeholder }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <StyledInput
      type="text"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default Input;

const StyledInput = styled.input`
  width: 100%;
  height: 44px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  border: 1px solid ${theme.colors.primary100};
  background: rgba(255, 135, 0, 0.05);
  color: ${theme.colors.b700};
  outline: none;

  &::placeholder {
    color: ${theme.colors.b400};
    ${(props) => props.theme.fonts.caption3_r};
  }
`;
