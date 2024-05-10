import { theme } from "@/styles/theme";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

export interface MoreProps {
  text?: string;
  onClick: () => void;
}

const More: React.FC<MoreProps> = (props: MoreProps) => {
  const { text = "자세히 보기", onClick } = props;
  return (
    <StyledMore onClick={onClick}>
      {text}
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
  margin-top: 4px;
  gap: 8px;
  color: ${theme.colors.b400};
  ${(props) => props.theme.fonts.caption1_m};
  cursor: pointer;
`;
