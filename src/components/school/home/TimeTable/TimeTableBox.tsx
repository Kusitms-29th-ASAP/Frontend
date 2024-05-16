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

  return (
    <Container>
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
    </Container>
  );
};

export default TimeTableBox;

const Container = styled.div`
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
