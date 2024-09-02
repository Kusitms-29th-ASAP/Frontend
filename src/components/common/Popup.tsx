import { theme } from "@/styles/theme";
import Image from "next/image";
import { FC, ReactNode } from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export interface PopupProps {
  onClose: () => void;
  title: string;
  children: ReactNode;
  height: string;
  noPadding?: boolean;
}

const Popup: FC<PopupProps> = ({
  onClose,
  title,
  children,
  height,
  noPadding,
}) => {
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
          <TitleBox>{title}</TitleBox>
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
        <ContentBox noPadding={noPadding}>{children}</ContentBox>
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
  z-index: 1000;
`;

/* 문자열 height 0.8배 계산 함수 ("800px(%)"=>"640px(%)") */
const calculateHeight = (height: string) => {
  const value = parseFloat(height);
  const unit = height.replace(value.toString(), "");
  return `${value * 0.8}${unit}`;
};

const StyledPopup = styled(motion.div)<{ height: string }>`
  max-width: 480px;
  width: 100%;
  height: ${(props) => props.height};
  overflow-y: scroll;
  background: ${theme.colors.white};
  position: relative;
  color: ${theme.colors.b700};
  border-radius: 12px 12px 0px 0px;
  z-index: 3000;

  @media screen and (max-height: 800px) {
    height: ${(props) => calculateHeight(props.height)};
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
  ${(props) => props.theme.fonts.body1_b}
  padding: 20px;
  border-radius: 12px 12px 0px 0px;
  position: sticky;
  top: 0;
  background: ${theme.colors.white};
  z-index: 100;
`;

const TitleBox = styled.div`
  width: 100%;
  background: ${theme.colors.white};
  z-index: 100;
`;

const ImageBox = styled.div`
  cursor: pointer;
  text-align: right;
`;

const ContentBox = styled.div<{ noPadding?: boolean }>`
  width: 100%;
  ${(props) =>
    !props.noPadding &&
    css`
      padding: 0 20px 28px 20px;
      overflow-y: scroll;
    `}
  z-index: 0;
`;
