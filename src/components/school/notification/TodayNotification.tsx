"use client";

import styled from "styled-components";
import { useState } from "react";
import Notificaiton from "./Notification";

const TodayNotificationData = [
  "개인정보 동의서 수요일까지 제출",
  "수학익힘책 16p~17p 풀어오기",
];

const TodayNotification = () => {
  const [today, setToday] = useState(new Date());
  const [teacher, setTeacher] = useState("김동우");

  return (
    <Container>
      <TodayTitle>오늘의 알림장</TodayTitle>
      <Notificaiton
        day={today}
        teacher={teacher}
        notifications={TodayNotificationData}
        isToday={true}
      />
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
