import { theme } from "@/styles/theme";
import Image from "next/image";
import { FC, ReactNode } from "react";
import styled from "styled-components";

interface PopupProps {
  onClose: () => void;
  title: string;
  children: ReactNode;
  height: string;
}

const Popup: FC<PopupProps> = ({ onClose, title, children, height }) => {
  return (
    <StyledPopup height={height}>
      <Title>
        {title}
        <Image
          src="/assets/icons/ic_close.svg"
          alt="close"
          width={24}
          height={24}
          onClick={onClose}
        />
      </Title>
      {children}
    </StyledPopup>
  );
};

export default Popup;

const StyledPopup = styled.div<{ height: string }>`
  max-width: 480px;
  width: 100%;
  height: ${(props) => props.height};
  overflow-y: scroll;
  padding: 20px 20px 28px 20px;
  border-radius: 12px 12px 0px 0px;
  background: ${theme.colors.white};
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 200;
  color: ${theme.colors.b700};
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  ${(props) => props.theme.fonts.body1_b}
`;
