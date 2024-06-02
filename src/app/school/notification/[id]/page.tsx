"use client";

import Topbar from "@/components/common/Topbar";
import NotificationDetailList from "@/components/school/notification/NotificationDetailList";
import TopContent from "@/components/school/notification/TopContent";
import styled from "styled-components";

const NotificationDetail = () => {
  return (
    <>
      <Container>
        <Topbar text="알림장 자세히보기" icon={true} />
        <TopContent isToday={true} day={"2024-05-22"} teacher={"김동우"} />
      </Container>
      <NotificationDetailList />
    </>
  );
};

export default NotificationDetail;

const Container = styled.div`
  padding: 16px 20px;
`;
