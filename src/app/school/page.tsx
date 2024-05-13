"use client";

import Tabbar from "@/components/common/Tabbar";
import Tobbar from "@/components/common/Tobbar";
import HomeGiudeRemind from "@/components/school/home/HomeGiudeRemind";
import NotificationCheck from "@/components/school/home/NotificationCheck";
import OurClassAlbum from "@/components/school/home/OurClassAlbum";
import ParentReference from "@/components/school/home/ParentReference";
import TimeTable from "@/components/school/home/TimeTable";
import WeeklyStudyGuide from "@/components/school/home/WeeklyStudyGuide";
import styled from "styled-components";

const School = () => {
  return (
    <>
      <Container>
        <Tobbar text="학교생활" />
      </Container>
      <Background>
        <WeeklyStudyGuide />
        <TimeTable />
        <HomeGiudeRemind />
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
