"use client";

import styled from "styled-components";
import { LastNotificationsData } from "@/data/notificationData";
import Notification from "./Notification";

const LastNotifications = () => {
  return (
    <Container>
      <LastTitle>지난 알림장</LastTitle>
      <LastNotificationBox>
        {LastNotificationsData.map((data) => (
          <Notification
            key={data.id}
            day={data.day}
            teacher={data.teacher}
            notifications={data.notifications}
            isToday={false}
          />
        ))}
      </LastNotificationBox>
    </Container>
  );
};

export default LastNotifications;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px 20px 24px 20px;
  background: linear-gradient(180deg, #fff 0%, #f3f6fa 20.33%, #f1f5f9 100%);
  position: relative;
`;

const LastTitle = styled.div`
  ${({ theme }) => theme.fonts.body1_b};
  color: ${({ theme }) => theme.colors.b700};
`;

const LastNotificationBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
