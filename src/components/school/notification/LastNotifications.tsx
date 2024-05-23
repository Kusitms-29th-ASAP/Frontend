"use client";

import styled from "styled-components";
import Notification from "./Notification";
import { useEffect, useState } from "react";
import Axios from "@/apis/axios";
import { NoData } from "./TodayNotification";

interface Description {
  description: string;
}

interface Announcement {
  descriptions: Description[];
  writeDate: string;
}

const LastNotifications = () => {
  const [teacher, setTeacher] = useState("");
  const [lastNotiData, setLastNotiData] = useState<Announcement[]>([]);

  useEffect(() => {
    Axios.get(`/api/v1/classrooms/announcements`)
      .then((response) => {
        const { teacherName, announcements } = response.data;
        setTeacher(teacherName);
        setLastNotiData(announcements);
      })
      .catch(() => {
        console.error("All Noti Get Error");
      });
  }, []);

  return (
    <Container>
      <LastTitle>지난 알림장</LastTitle>
      <LastNotificationBox>
        {lastNotiData.length > 0 ? (
          lastNotiData.map((data, index) => (
            <Notification
              key={index}
              day={data.writeDate}
              teacher={teacher}
              notifications={data}
              isToday={false}
            />
          ))
        ) : (
          <NoData>지난 알림장이 없어요!</NoData>
        )}
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
