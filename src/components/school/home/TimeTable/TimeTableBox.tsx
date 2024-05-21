import TimeBox from "./TimeBox";
import SubjectBox from "./SubjectBox";
import styled from "styled-components";

const subjectsData = [
  { id: 1, subject: ["국어", "과학", "미술", "미술", "수학"] },
  { id: 2, subject: ["국어", "과학", "미술", "미술", "수학"] },
  { id: 3, subject: ["국어", "과학", "미술", "미술"] },
  { id: 4, subject: ["국어", "과학", "미술", "미술", "체육"] },
  { id: 5, subject: ["국어", "과학", "미술", "미술"] },
];

const TimeTableBox = () => {
  const TimeData = [1, 2, 3, 4, 5];
  const Week = ["월", "화", "수", "목", "금"];

  return (
    <Container>
      <TimetableTop>
        <TimeBox time={0} />
        <WeekBoxContainer>
          {Week.map((day, index) => (
            <WeekBox key={index}>{day}</WeekBox>
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
          {subjectsData.map((data, index) => (
            <SubjectCol key={index}>
              {data.subject.map((subject, index) => (
                <SubjectBox subject={subject} key={index} />
              ))}
            </SubjectCol>
          ))}
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

const WeekBox = styled.div`
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

const SubjectCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1 1 0%;
`;

const SubjectListBox = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
  flex: 1 1 auto;
`;
