import TimeBox from "./TimeBox";
import SubjectBox from "./SubjectBox";
import styled, { css } from "styled-components";
import getWeekTimetable from "@/apis/timetable/getWeekTimetable";
import { useState } from "react";

const TimeTableBox = () => {
  const TimeData = [1, 2, 3, 4, 5];
  const Week = ["월", "화", "수", "목", "금"];
  const todayIndex = new Date().getDay() - 1;
  const [mondaySubject, setMondaySubject] = useState([]);
  const [tuesdaySubject, setTuesdaySubject] = useState([]);
  const [wednesdaySubject, setWednesdaySubject] = useState([]);
  const [thursdaySubject, setThursdaySubject] = useState([]);
  const [fridaySubject, setFridaySubject] = useState([]);

  const getTimetableData = async () => {
    const response = await getWeekTimetable();
    setMondaySubject(response.timetables.MONDAY);
    setTuesdaySubject(response.timetables.TUESDAY);
    setWednesdaySubject(response.timetables.WEDNESDAY);
    setThursdaySubject(response.timetables.THURSDAY);
    setFridaySubject(response.timetables.FRIDAY);
  };
  getTimetableData();

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
        <SubjectListBox>
          <SubjectCol highlight={todayIndex === 0}>
            {mondaySubject.map(({ subject }, index) => (
              <SubjectBox subject={subject} key={index} />
            ))}
          </SubjectCol>
          <SubjectCol highlight={todayIndex === 1}>
            {tuesdaySubject.map(({ subject }, index) => (
              <SubjectBox subject={subject} key={index} />
            ))}
          </SubjectCol>
          <SubjectCol highlight={todayIndex === 2}>
            {wednesdaySubject.map(({ subject }, index) => (
              <SubjectBox subject={subject} key={index} />
            ))}
          </SubjectCol>
          <SubjectCol highlight={todayIndex === 3}>
            {thursdaySubject.map(({ subject }, index) => (
              <SubjectBox subject={subject} key={index} />
            ))}
          </SubjectCol>
          <SubjectCol highlight={todayIndex === 4}>
            {fridaySubject.map(({ subject }, index) => (
              <SubjectBox subject={subject} key={index} />
            ))}
          </SubjectCol>
        </SubjectListBox>
      </TimetableBottom>
    </Container>
  );
};

export default TimeTableBox;

const Container = styled.div`
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
