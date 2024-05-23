import styled from "styled-components";
import Image from "next/image";

interface TitleBoxProps {
  day: string;
  // day: Date;
  teacher: string;
}

const TitleBox = (props: TitleBoxProps) => {
  const { day, teacher } = props;

  const parsedDate = new Date(day);

  const month = parsedDate.getMonth() + 1;
  const date = parsedDate.getDate();
  const week = parsedDate.getDay();
  const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
  const weekday = weekdays[week];

  return (
    <Container>
      <Title>
        {month}월 {date}일 {weekday}요일 알림장
      </Title>
      <TeacherBox>
        <Image
          src="/assets/school/teacher.svg"
          alt="teacher"
          width={22}
          height={22}
        />
        <div>{teacher} 선생님</div>
      </TeacherBox>
    </Container>
  );
};

export default TitleBox;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Title = styled.div`
  ${({ theme }) => theme.fonts.body2_b};
  color: ${({ theme }) => theme.colors.b700};
`;

const TeacherBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    border-radius: 8px;
  }
  div {
    ${({ theme }) => theme.fonts.caption1_m};
    color: ${({ theme }) => theme.colors.b400};
  }
`;
