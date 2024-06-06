import { TodayStudyData } from "@/data/todayStudyData";
import WhiteBox from "../WhiteBox";
import TodayStudyBox from "./TodayStudyBox";
import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";
import Card from "@/components/common/Card";

const WeeklyStudyList = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState<number | null>(0);
  const Week = ["월", "화", "수", "목", "금"];

  /* 주의 시작일과 마지막일 계산 (월요일 ~ 금요일) */
  const getWeekStartAndEnd = (date: Date) => {
    const dayOfWeek = date.getDay();
    const startDate = new Date(date);
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
    getWeekStartAndEnd(startDate);
  };

  /* 다음 주로 이동 */
  const handleForwardWeek = () => {
    const { endDate } = getWeekStartAndEnd(currentDate);
    const newDate = new Date(endDate);
    newDate.setDate(newDate.getDate() + 3); // 금요일 다음의 월요일로 설정

    if (getWeekDifference(newDate) >= 0) {
      setCurrentDate(newDate);
    }
    getWeekStartAndEnd(newDate);
  };

  /* 주 정보 문자열 생성 */
  const formatDate = (date: Date) =>
    `${date.getMonth() + 1}월 ${date.getDate()}일`;
  const { startDate, endDate } = getWeekStartAndEnd(currentDate);
  const weekString = `${formatDate(startDate)} ~ ${formatDate(endDate)}`;

  /* 주 정보 문자열에 상태 표시 (이번 주, x주 전/후) */
  const diff = getWeekDifference(currentDate);
  const getWeekString = () => {
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

  const handleCardClick = (index: number) => {
    setSelectedDay(index);
  };
  const WeekTodayStudyData = TodayStudyData.filter(
    (data) => data.week === diff + 1
  );

  /* 오늘 날짜인지 확인 */
  const isThisWeek = (date: Date) => {
    const today = new Date();
    const { startDate, endDate } = getWeekStartAndEnd(today);
    return date >= startDate && date <= endDate;
  };

  const formatDateForCard = (date: Date, dayOffset: number) => {
    const dateForDay = new Date(date);
    dateForDay.setDate(date.getDate() + dayOffset);
    return `${dateForDay.getDate()}`;
  };

  /* selectedDay 필터 */
  const getFilteredData = () => {
    if (selectedDay === null) return [];

    // selectedDay가 0부터 시작하므로 +1 해서 week 번호 맞춤
    const selectedWeek = selectedDay + 1;

    return TodayStudyData.filter((data) => data.week === selectedWeek);
  };

  const filteredData = getFilteredData();

  return (
    <StyledWhiteBox>
      <Container>
        <DateSelect>
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
                opacity: isThisWeek(currentDate) ? 0.5 : 1,
                cursor: isThisWeek(currentDate) ? "" : "pointer",
              }}
            />
          </DateLine>
          <CardList>
            {Week.map((day, index) => (
              <Card
                key={index}
                type="date"
                sub={day}
                main={formatDateForCard(startDate, index)}
                color={selectedDay === index ? "orange" : "white"}
                onClick={() => handleCardClick(index)}
              />
            ))}
          </CardList>
        </DateSelect>
      </Container>
      {diff === 0 && filteredData.length > 0 && (
        <TodayStudyList>
          {filteredData.map((data) => (
            <TodayStudyBox
              key={data.id}
              week={data.week}
              subject={data.subject}
              studies={data.studies}
            />
          ))}
        </TodayStudyList>
      )}
    </StyledWhiteBox>
  );
};

export default WeeklyStudyList;

const StyledWhiteBox = styled(WhiteBox)`
  gap: 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const TodayStudyList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 15px;
`;

const DateSelect = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const DateLine = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CardList = styled.div`
  display: flex;
  gap: 18px;
  div {
    width: 100%;
  }
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
