"use client";

import styled from "styled-components";
import WhiteBox from "../WhiteBox";
import ListNumber from "@/components/common/ListNumber";
import { useState } from "react";
import Image from "next/image";

const TodayNotificationData = [
  "개인정보 동의서 수요일까지 제출",
  "수학익힘책 16p~17p 풀어오기",
];

const TodayNotification = () => {
  const [today, setToday] = useState(new Date());
  const [teacher, setTeacher] = useState("김동우");

  const month = today.getMonth() + 1;
  const date = today.getDate();
  const day = today.getDay();
  const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
  const weekday = weekdays[day];

  return (
    <Container>
      <TodayTitle>오늘의 알림장</TodayTitle>
      <WhiteBox>
        <TopBox>
          <New>NEW</New>
          <Mint>오늘의 알림장</Mint>
        </TopBox>

        <TitleBox>
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
        </TitleBox>

        <ListNumberBox>
          {TodayNotificationData.map((data, index) => (
            <ListNumber index={index + 1} key={index} text={data} />
          ))}
        </ListNumberBox>
      </WhiteBox>
    </Container>
  );
};

export default TodayNotification;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px 20px 24px 20px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 159, 51, 0.1) 77.18%,
    rgba(255, 135, 0, 0.16) 100%
  );
  position: relative;
`;

const TodayTitle = styled.div`
  ${({ theme }) => theme.fonts.body1_b};
  color: ${({ theme }) => theme.colors.b700};
`;

const TopBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const TextBox = styled.div`
  ${({ theme }) => theme.fonts.caption1_m};
  border-radius: 8px;
  padding: 3px 8px;
`;

const New = styled(TextBox)`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.primary500};
`;

const Mint = styled(TextBox)`
  color: ${({ theme }) => theme.colors.sub_mint};
  background: rgba(5, 206, 194, 0.1);
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

const ListNumberBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 12px 10px;
  background: ${({ theme }) => theme.colors.b80};
  border-radius: 8px;
`;
