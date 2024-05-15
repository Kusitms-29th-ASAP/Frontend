"use client";

import Topbar from "@/components/common/Topbar";
import NotificationDetailList from "@/components/school/notification/NotificationDetailList";
import TitleBox from "@/components/school/notification/TitleBox";
import TopBox from "@/components/school/notification/TopBox";
import styled from "styled-components";

const NotificationDetail = () => {
  return (
    <>
      <Container>
        <Topbar text="알림장 자세히보기" icon={true} />
        <TopContainer>
          <TopBox isToday={true} />
          <TitleBox day={new Date()} teacher={"김동우"} />
        </TopContainer>
      </Container>
      <NotificationDetailList />
    </>
  );
};

export default NotificationDetail;

const Container = styled.div`
  padding: 16px 20px;
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
