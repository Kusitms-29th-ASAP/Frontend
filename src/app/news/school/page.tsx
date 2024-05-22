"use client";

import Axios from "@/apis/axios";
import Tabbar from "@/components/common/Tabbar";
import HomeGuide from "@/components/news/HomeGuide";
import Summary from "@/components/news/Summary";
import { theme } from "@/styles/theme";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styled from "styled-components";

export interface AnnouncementsProps {
  isNew: boolean;
  category: string;
  title: string;
  uploadDate: string;
  summary: string[];
  announcementId: number;
}

const School = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [summaryData, setSummaryData] = useState<AnnouncementsProps[]>([]);

  useEffect(() => {
    Axios.get(`/api/v1/announcements/schools?size=10&page=0`)
      .then((response) => {
        const summaryData: AnnouncementsProps[] =
          response.data.schoolAnnouncementInfos;
        setSummaryData(summaryData);
        console.log("소식 목록:", summaryData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleTabClick = (path: any) => {
    router.push(path);
  };

  return (
    <>
      <Layout>
        <NewsHeader>
          <Menu>소식</Menu>
          <SubTab>
            <TabItem
              onClick={() => handleTabClick("/news/school")}
              selected={pathname === "/news/school"}
            >
              학교
            </TabItem>
            <TabItem
              onClick={() => handleTabClick("/news/eduOffice")}
              selected={pathname === "/news/eduOffice"}
            >
              교육청
            </TabItem>
          </SubTab>
        </NewsHeader>
        <Background>
          <SchoolInfo>
            설정학교
            <Br>서울미동초등학교</Br>
          </SchoolInfo>
          <BellImage
            src="/assets/news/bell.svg"
            width={102}
            height={102}
            alt="bell"
          />
          <HomeGuide />
        </Background>
        {summaryData && <Summary dummyData={summaryData} />}
      </Layout>
      <Tabbar />
    </>
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

const Menu = styled.div`
  display: flex;
  align-items: center;
  padding: 1.2rem 0;
  gap: 0.8rem;
  ${({ theme }) => theme.fonts.body1_b};
  color: ${({ theme }) => theme.colors.b800};
`;

const NewsHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 20px 20px 0px 20px;
`;

const SubTab = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  color: ${theme.colors.b400};
  text-align: center;
  ${(props) => props.theme.fonts.body2_r};
`;

const TabItem = styled.div<{ selected: boolean }>`
  position: relative;
  cursor: pointer;
  color: ${({ theme, selected }) =>
    selected ? theme.colors.primary600 : theme.colors.b400};
  font-weight: ${(selected) => (selected ? 700 : 400)};
  ${(props) => props.theme.fonts.body2_r};
  &:after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 4px;
    border-radius: 12px;
    background-color: ${theme.colors.primary600};
    opacity: ${(props) => (props.selected ? "100%" : "0")};
    transition: opacity 0.3s ease;
  }

  &:hover {
    color: ${theme.colors.primary600};
  }
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
`;

const Br = styled.div`
  color: ${theme.colors.b700};
  ${(props) => props.theme.fonts.heading2_b};
`;

const BellImage = styled(Image)`
  position: absolute;
  top: 0px;
  right: 16px;
`;
