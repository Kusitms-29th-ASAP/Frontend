"use client";

import HomeGuide from "@/components/news/HomeGuide";
import Summary from "@/components/news/Summary";
import { summaryData, todoHomeData } from "@/data/newsData";
import { theme } from "@/styles/theme";
import Image from "next/image";
import styled from "styled-components";

const School = () => {
  return (
    <Layout>
      <Background>
        <SchoolInfo>
          설정학교
          <Br>서울미동초등학교</Br>
        </SchoolInfo>
        <BellImage
          src="/assets/images/news_bell.svg"
          width={102}
          height={102}
          alt="bell"
        />
        <HomeGuide />
      </Background>
      <Summary dummyData={summaryData} />
    </Layout>
  );
};

export default School;

const Layout = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 23px;
  position: relative;
`;

const Background = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px 20px 24px 20px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 159, 51, 0.1) 77.18%,
    rgba(255, 135, 0, 0.16) 100%
  );
  position: relative;
`;

const SchoolInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${theme.colors.b400};
  ${(props) => props.theme.fonts.body3_m};
  line-height: 150%;
`;

const Br = styled.div`
  color: ${theme.colors.b700};
  ${(props) => props.theme.fonts.heading2_b};
  line-height: 134%;
`;

const BellImage = styled(Image)`
  position: absolute;
  top: 0px;
  right: 16px;
`;
