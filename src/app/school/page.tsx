"use client";

import Tabbar from "@/components/common/Tabbar";
import Topbar from "@/components/common/Topbar";
import SchoolHomeTop from "@/components/school/SchoolHomeTop";
import HomeGuideRemind from "@/components/school/home/HomeGuideRemind";
import NotificationCheck from "@/components/school/home/NotificationCheck";
import OurClassAlbum from "@/components/school/home/OurClassAlbum";
import ParentReference from "@/components/school/home/ParentReference";
import TimeTable from "@/components/school/home/TimeTable";
import styled from "styled-components";

const School = () => {
  return (
    <>
      <Container>
        <Topbar text="학교생활" />
      </Container>
      <Background>
        <SchoolHomeTop title={"주간 학습 안내"} />
        <TimeTable />
        <HomeGuideRemind />
        <NotificationCheck />
        <ParentReference />
      </Background>
      <OurClassAlbum />
      <Tabbar />
    </>
  );
};

export default School;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 20px 0 20px;
`;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  background: ${({ theme }) => theme.colors.b100};
`;
