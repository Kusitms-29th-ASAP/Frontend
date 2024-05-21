"use client";

import Tabbar from "@/components/common/Tabbar";
import Topbar from "@/components/common/Topbar";
import LastNotification from "@/components/school/notification/LastNotifications";
import TodayNotification from "@/components/school/notification/TodayNotification";
import styled from "styled-components";

const Notification = () => {
  return (
    <>
      <Container>
        <Topbar text="학급알림장" icon={true} link="/school" />
      </Container>
      <TodayNotification />
      <LastNotification />
    </>
  );
};

export default Notification;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 12px 0 12px;
`;
