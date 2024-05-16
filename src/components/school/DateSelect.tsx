import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";

export interface DateSelectProps {
  type: "week";
}

const DateSelect = (props: DateSelectProps) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const { type } = props;

  /* 주의 시작일과 마지막일 계산 (월요일 ~ 금요일) */
  const getWeekStartAndEnd = (date: Date) => {
    const dayOfWeek = date.getDay();
    const startDate = new Date(date);
    // 요일이 0일 (일요일)인 경우 -6을 해서 이전 주의 월요일로 설정
    startDate.setDate(
      startDate.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1)
    );
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 4); // 월요일부터 4일 뒤는 금요일

    return { startDate, endDate };
  };

  /* 날짜(주) 차이 계산 */
  const getWeekDifference = (date: Date) => {
    const today = new Date();
    const diffInMs = today.getTime() - date.getTime();
    const diffInWeeks = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 7));
    return diffInWeeks;
  };

  /* 이전 주로 이동 */
  const handleBackWeek = () => {
    const { startDate } = getWeekStartAndEnd(currentDate);
    startDate.setDate(startDate.getDate() - 7);
    setCurrentDate(startDate);
  };

  /* 다음 주로 이동 */
  const handleForwardWeek = () => {
    const { endDate } = getWeekStartAndEnd(currentDate);
    const newDate = new Date(endDate);
    newDate.setDate(newDate.getDate() + 3); // 금요일 다음의 월요일로 설정

    if (getWeekDifference(newDate) >= 0) {
      setCurrentDate(newDate);
    }
  };

  /* 주 정보 문자열 생성 */
  const formatDate = (date: Date) =>
    `${date.getMonth() + 1}월 ${date.getDate()}일`;
  const { startDate, endDate } = getWeekStartAndEnd(currentDate);
  const weekString = `${formatDate(startDate)} ~ ${formatDate(endDate)}`;

  /* 주 정보 문자열에 상태 표시 (이번 주, x주 전/후) */
  const getWeekString = () => {
    const diff = getWeekDifference(currentDate);
    if (diff === 0) {
      return (
        <DateText>
          {weekString} <span>이번주</span>
        </DateText>
      );
    } else {
      return (
        <DateText>
          {weekString}{" "}
          <span>{diff > 0 ? `${diff}주 전` : `${-diff}주 후`}</span>
        </DateText>
      );
    }
  };

  return (
    <DateLine>
      <Image
        src="/assets/icons/ic_chevron_left.svg"
        alt="left"
        width={20}
        height={20}
        onClick={handleBackWeek}
        style={{ cursor: "pointer" }}
      />
      {getWeekString()}
      <Image
        src="/assets/icons/ic_chevron_right.svg"
        alt="right"
        width={20}
        height={20}
        onClick={handleForwardWeek}
        style={{
          opacity: getWeekDifference(new Date()) <= 0 ? 0.5 : 1,
          cursor: getWeekDifference(new Date()) <= 0 ? "default" : "pointer",
        }}
      />
    </DateLine>
  );
};

export default DateSelect;

const DateLine = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const DateText = styled.div`
  ${(props) => props.theme.fonts.body3_m};
  color: ${(props) => props.theme.colors.b600};

  span {
    ${(props) => props.theme.fonts.caption1_m};
    color: ${(props) => props.theme.colors.primary500};
    margin-left: 6px;
  }
`;
