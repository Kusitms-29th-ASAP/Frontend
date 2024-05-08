import { theme } from "@/styles/theme";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

type ToastType = "basic" | "primary";

interface ToastProps {
  message: string;
  type?: ToastType;
  duration?: number;
  onClose?: () => void;
}

const Toast: React.FC<ToastProps> = ({
  message,
  type = "basic",
  duration = 3000, // 기본 3초
  onClose,
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    /* duration 이후에 토스트를 자동으로 닫음 */
    const timer = setTimeout(() => {
      setVisible(false);
      if (onClose) onClose();
    }, duration);

    /* 컴포넌트가 언마운트되거나 duration 이전에 닫히면 타이머 클리어 */
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <StyledToast visible={visible} type={type}>
      {message}
      <Image
        src="/assets/icons/ic_close_white.svg"
        alt="close"
        width={20}
        height={20}
        onClick={onClose}
      />
    </StyledToast>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const StyledToast = styled.div<{ visible: boolean; type: ToastType }>`
  width: 90%;
  max-width: 440px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  padding: 12px 16px;
  border-radius: 12px;
  background-color: ${(props) => {
    switch (props.type) {
      case "basic":
        return props.theme.colors.b700;
      case "primary":
        return props.theme.colors.primary500;
    }
  }};
  color: ${theme.colors.white};
  ${(props) => props.theme.fonts.body3_b}
  opacity: ${(props) => (props.visible ? "1" : "0")};
  transition: opacity 500ms ease-in-out;
  animation: ${(props) =>
    props.visible
      ? css`
          ${fadeIn} 0.5s ease-in-out
        `
      : css`
          ${fadeOut} 0.5s ease-in-out
        `};
`;

export default Toast;
