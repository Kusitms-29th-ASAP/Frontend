import { theme } from "@/styles/theme";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

export type moreType = "default" | "text";

export interface MoreProps {
  text?: string;
  onClick: () => void;
  moreType?: moreType;
  align?: string;
}

const More: React.FC<MoreProps> = (props: MoreProps) => {
  const {
    text = "자세히 보기",
    onClick,
    moreType = "default",
    align = "left",
  } = props;

  let moreClassName = moreType;
  if (moreType === "default") {
    moreClassName += " default";
  } else if (moreType === "text") {
    moreClassName += " text";
  }

  return (
    <StyledMore onClick={onClick} className={moreClassName}>
      <StyledText $align={align}>{text}</StyledText>
      <Image
        src="/assets/icons/ic_chevron_right.svg"
        alt="right"
        width={20}
        height={20}
      />
    </StyledMore>
  );
};

export default More;

const StyledMore = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  ${(props) => props.theme.fonts.caption1_m};
  cursor: pointer;

  &.default {
    color: ${theme.colors.b400};
  }
  &.text {
    div {
      width: 100%;
    }
    ${(props) => props.theme.fonts.body3_b};
    color: ${theme.colors.b600};
  }
`;

const StyledText = styled.div<{ $align: string }>`
  width: 100%;
  word-break: keep-all;
  white-space: pre-wrap;
  text-align: ${({ $align }) => ($align ? $align : "left")};
`;
