import { theme } from "@/styles/theme";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Checkbox from "./Checkbox";
import Image from "next/image";

export type listboxType = "check" | "none" | "direct" | "content";
export type colorType = "orange" | "mint";

export interface ListBoxProps {
  id?: number;
  time?: string;
  type?: string;
  text?: string;
  dday?: number;
  listboxType?: listboxType;
  color?: colorType;
  style?: React.CSSProperties & { fontSize?: string };
  content1?: string;
  content2?: string;
  value?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  onDelete?: () => void;
}
const ListBox = (props: ListBoxProps) => {
  const {
    id,
    type,
    text,
    time,
    dday = 0,
    listboxType = "none",
    color = "orange",
    style,
    content1,
    content2,
    value,
    checked,
    onClick,
    onDelete,
  } = props;

  const [futureDate, setFutureDate] = useState("");
  const [futureWeekday, setFutureWeekday] = useState("");

  useEffect(() => {
    const now = new Date();
    const future = new Date(now.setDate(now.getDate() + dday));
    const futureDateString = future.toLocaleDateString("ko-KR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setFutureDate(futureDateString);
    setFutureWeekday(
      future
        .toLocaleDateString("ko-KR", { weekday: "short" })
        .replace("요일", "")
    );
  }, [dday]);

  const month = futureDate.split(" ")[1];
  const day = futureDate.split(" ")[2];

  let listboxClassName = listboxType;
  if (color === "orange") {
    listboxClassName += " orange";
  } else if (color === "mint") {
    listboxClassName += " mint";
  }

  return (
    <StyledListBox
      id={id}
      className={listboxClassName}
      color={color}
      style={style}
      onClick={onClick}
    >
      {(listboxType === "check" || listboxType === "direct") && (
        <Checkbox value={value} checked={checked} />
      )}
      <Content>
        <Type className={listboxClassName}>
          {listboxType === "none" && (
            <>
              <span style={{ fontSize: "14px", fontWeight: "700" }}>
                D-{dday}
              </span>
              <span style={{ fontSize: "12px", fontWeight: "500" }}>
                {month} {day} ({futureWeekday}) 까지
              </span>
            </>
          )}
          {listboxType === "content" && <Content1>{content1}</Content1>}
          {type}
          {listboxType === "direct" && <DirectSpan>{time}</DirectSpan>}
        </Type>
        {listboxType === "content" ? (
          <Content2>{content2}</Content2>
        ) : (
          <Text>{text}</Text>
        )}
      </Content>

      {listboxType === "direct" ? (
        <Delete onClick={onDelete}>
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

const StyledListBox = styled.div<ListBoxProps>`
  width: 100%;
  border-radius: 8px;
  border: 1px solid ${theme.colors.primary100};
  background: ${theme.colors.b50};
  letter-spacing: -0.28px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 0px 12px 12px;

  &.mint {
    border: 1px solid ${theme.colors.b300};
  }
  &.content {
    border: none;
    cursor: pointer;
    &.mint {
      border: none;
    }
  }
  cursor: ${(props) => (props.onClick ? "pointer" : "default")};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0px;
`;

const Content1 = styled.div`
  ${(props) => props.theme.fonts.body3_m};
  color: ${theme.colors.b400};
`;

const Content2 = styled.div`
  ${(props) => props.theme.fonts.caption1_m};
  color: ${theme.colors.b400};
`;

const DirectSpan = styled.span`
  font-size: 11px;
  font-weight: 400;
  color: ${theme.colors.sub_mint};
`;

const Type = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  color: ${theme.colors.b600};
  white-space: pre-wrap;
  ${(props) => props.theme.fonts.caption2_r};
  &.none {
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
  margin-top: 8px;
  margin-right: 10px;
  position: absolute;
  top: 0;
  right: 0;
  color: ${theme.colors.b400};
  ${(props) => props.theme.fonts.caption3_r};
  cursor: pointer;
`;

const Time = styled.div`
  display: inline-flex;
  width: 61px;
  height: 100%;
  padding: 16.5px 12px 16.5px 12px;
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
