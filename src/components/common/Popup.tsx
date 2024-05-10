import { theme } from "@/styles/theme";
import Image from "next/image";
import { FC, ReactNode } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export interface PopupProps {
  onClose: () => void;
  title: string;
  children: ReactNode;
  height: string;
}

const Popup: FC<PopupProps> = ({ onClose, title, children, height }) => {
  return (
    <Overlay onClick={onClose}>
      <StyledPopup
        height={height}
        onClick={(e) => e.stopPropagation()}
        initial={{ y: "100vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100vh", opacity: 0 }}
        transition={{ duration: 0.2, type: "tween" }}
      >
        <Title>
          {title}
          <ImageBox>
            <Image
              src="/assets/icons/ic_close.svg"
              alt="close"
              width={24}
              height={24}
              onClick={onClose}
            />
          </ImageBox>
        </Title>
        {children}
      </StyledPopup>
    </Overlay>
  );
};

export default Popup;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 100;
`;

const StyledPopup = styled(motion.div)<{ height: string }>`
  max-width: 480px;
  width: 100%;
  height: ${(props) => props.height};
  overflow-y: scroll;
  padding: 20px 20px 28px 20px;
  border-radius: 12px 12px 0px 0px;
  background: ${theme.colors.white};
  position: relative;
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

const ImageBox = styled.div`
  cursor: pointer;
`;
