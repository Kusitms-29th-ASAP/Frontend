"use client";

import styled from "styled-components";
import { useEffect, useState } from "react";
import Notification from "./Notification";
import Axios from "@/apis/axios";
import { theme } from "@/styles/theme";
import { useRouter } from "next/navigation";

interface Description {
  description: string;
}

interface Announcement {
  descriptions: Description[];
  writeDate: string;
}

const TodayNotification = () => {
  const router = useRouter();
  const [today, setToday] = useState("");
  const [teacher, setTeacher] = useState("");
  const [notiData, setLastNotiData] = useState<Announcement[]>([]);

  const handleNotificationClick = (announcementId: number) => {
    router.push(`/school/notification/${announcementId}`);
  };

  useEffect(() => {
    Axios.get(`/api/v1/classrooms/announcements`)
      .then((response) => {
        const { teacherName, writeDate, announcements } = response.data;
        setTeacher(teacherName);
        setToday(writeDate);
        setLastNotiData(announcements);
        console.log(response.data);
      })
      .catch(() => {});
  }, []);

  return (
    <Container>
      <TodayTitle>오늘의 알림장</TodayTitle>
      {notiData[0] !== null ? (
        <Notification
          day={notiData[0].writeDate}
          teacher={teacher}
          notifications={notiData[0]}
          isToday={true}
          // onClick={handleNotificationClick}
        />
      ) : (
        <NoData>알림 내용이 없어요!</NoData>
      )}
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

export const NoData = styled.div`
  width: 100%;
  height: 100%;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.b500};
  ${(props) => props.theme.fonts.caption1_m};
`;
