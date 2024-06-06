import TimeBox from "./TimeBox";
import SubjectBox from "./SubjectBox";
import styled, { css } from "styled-components";
import getWeekTimetable from "@/apis/timetable/getWeekTimetable";
import { useEffect, useState } from "react";

type DayOfWeek = "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY";

const TimeTableBox = () => {
  const TimeData = [1, 2, 3, 4, 5];
  const Week = ["월", "화", "수", "목", "금"];
  const todayIndex = new Date().getDay() - 1;

  const [subjects, setSubjects] = useState({
    MONDAY: [],
    TUESDAY: [],
    WEDNESDAY: [],
    THURSDAY: [],
    FRIDAY: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await getWeekTimetable();
      setSubjects(response.timetables);
    };
    fetchData();
  }, []);

  const renderSubjectColumns = () => {
    return (Object.keys(subjects) as DayOfWeek[]).map((day, index) => (
      <SubjectCol highlight={index === todayIndex} key={day}>
        {subjects[day].map(({ subject }, idx) => (
          <SubjectBox subject={subject} key={idx} />
        ))}
      </SubjectCol>
    ));
  };

  return (
    <Container>
      <TimetableTop>
        <TimeBox time={0} />
        <WeekBoxContainer>
          {Week.map((day, index) => (
            <WeekBox key={index} highlight={index === todayIndex}>
              {day}
            </WeekBox>
          ))}
        </WeekBoxContainer>
      </TimetableTop>
      <TimetableBottom>
        <TimeListBox>
          {TimeData.map((time, index) => (
            <TimeBox time={time} key={index} />
          ))}
        </TimeListBox>
        <SubjectListBox>{renderSubjectColumns()}</SubjectListBox>
      </TimetableBottom>
    </Container>
  );
};

export default TimeTableBox;

const Container = styled.div`
  min-width: 278px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TimetableTop = styled.div`
  display: flex;
  gap: 12px;
`;

const WeekBoxContainer = styled.div`
  display: flex;
  gap: 2px;
  width: 100%;
  height: 30px;
`;

const WeekBox = styled.div<{ highlight: boolean }>`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.b500};

  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.body3_m};

  &:first-child {
    border-radius: 6px 0 0 6px;
  }
  &:last-child {
    border-radius: 0 6px 6px 0;
  }
  ${(props) =>
    props.highlight &&
    css`
      background: ${({ theme }) => theme.colors.primary500};
    `}
`;

const TimetableBottom = styled.div`
  display: flex;
  gap: 9px;
  align-items: start;
  width: 100%;
`;

const TimeListBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SubjectCol = styled.div<{ highlight: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1 1 0%;

  ${(props) =>
    props.highlight &&
    css`
      div {
        color: ${({ theme }) => theme.colors.primary500};
        background: ${({ theme }) => theme.colors.white};
        border: 1px solid ${({ theme }) => theme.colors.primary500};
        border-radius: 6px;
      }
    `}
`;

const SubjectListBox = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
  flex: 1 1 auto;
`;
