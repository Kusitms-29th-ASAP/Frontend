"use client";

import Tabbar from "@/components/common/Tabbar";
import Topbar from "@/components/common/Topbar";
import SchoolHomeTop from "@/components/school/SchoolHomeTop";
import styled from "styled-components";

const WeeklyStudy = () => {
  return (
    <>
      <Container>
        <Topbar text="주간학습안내" icon={true} />
      </Container>
      <Background>
        <SchoolHomeTop title={"우리반 일정"} />
      </Background>
      <Tabbar />
    </>
  );
};

export default WeeklyStudy;

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
