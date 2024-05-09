import { theme } from "@/styles/theme";
import React, { ReactNode } from "react";
import styled from "styled-components";
import Checkbox from "./Checkbox";
import Image from "next/image";

export type listboxType = "check" | "none" | "direct";

export interface ListBoxProps {
  type: ReactNode;
  text: ReactNode;
  time: ReactNode;
  listboxType?: listboxType;
  color?: "orange" | "mint";
  style?: React.CSSProperties & { fontSize?: string };
}
const ListBox = (props: ListBoxProps) => {
  const {
    type,
    text,
    time,
    listboxType = "none",
    color = "orange",
    style,
  } = props;

  let listboxClassName = listboxType;
  if (color === "orange") {
    listboxClassName += " orange";
  } else if (color === "mint") {
    listboxClassName += " mint";
  }

  return (
    <StyledListBox className={listboxClassName} color={color} style={style}>
      {(listboxType === "check" || listboxType === "direct") && <Checkbox />}
      <Content>
        <Type className={listboxClassName}>
          {listboxType === "none" && (
            <span style={{ fontSize: "14px", fontWeight: "700" }}>
              D-2{`    `}
            </span>
          )}
          {type}
          {listboxType === "direct" && (
            <Span
              style={{
                fontSize: "11px",
                fontWeight: "400",
                color: theme.colors.sub_mint,
              }}
            >
              {time}
            </Span>
          )}
        </Type>
        <Text>{text}</Text>
      </Content>
      {listboxType === "direct" ? (
        <Delete>
          <Span>삭제</Span>
          <Image
            src="/assets/icons/ic_minus-circle.svg"
            alt="delete"
            width={16}
            height={16}
          />
        </Delete>
      ) : (
        <Time className={listboxClassName}>{time}</Time>
      )}
    </StyledListBox>
  );
};

export default ListBox;

const StyledListBox = styled.div`
  width: 100%;
  height: 48px;
  border-radius: 8px;
  border: 1px solid ${theme.colors.primary100};
  background: ${theme.colors.b50};
  line-height: 150%; /* 21px */
  letter-spacing: -0.28px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 12px;
  &.none {
    height: 65px;
    background: ${theme.colors.white};
  }

  &.mint {
    border: 1px solid ${theme.colors.b300};
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0px;
`;

const Type = styled.div`
  height: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  color: ${theme.colors.b400};
  white-space: pre-wrap;
  ${(props) => props.theme.fonts.caption2_r};
  &.none {
    height: 21px;
    ${(props) => props.theme.fonts.caption1_m};
  }
  &.none.orange {
    color: ${theme.colors.primary500};
  }
`;

const Span = styled.span`
  font-size: 11px;
  font-weight: 400;
`;

const Text = styled.div`
  color: ${theme.colors.b700};
  ${(props) => props.theme.fonts.body3_m};
`;

const Delete = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin-top: 2px;
  margin-right: 10px;
  position: absolute;
  top: 0;
  right: 0;
  color: ${theme.colors.b400};
  ${(props) => props.theme.fonts.caption3_r};
`;

const Time = styled.div`
  display: inline-flex;
  width: 61px;
  height: 100%;
  padding: 16.5px 10px 16.5px 12px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  color: ${theme.colors.primary700};
  ${(props) => props.theme.fonts.caption2_m};
  border-radius: 0px 8px 8px 0px;
  background: rgba(255, 135, 0, 0.15);
  white-space: nowrap;
  &.mint {
    color: ${theme.colors.sub_mint};
    background: rgba(5, 206, 194, 0.15);
  }
`;
