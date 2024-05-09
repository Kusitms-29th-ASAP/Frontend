"use client";

import Tabbar from "@/components/common/Tabbar";
import { theme } from "@/styles/theme";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

interface SubTabProps {
  selected: boolean;
}

const News = (props: any) => {
  const [selectedTab, setSelectedTab] = useState("school");

  return (
    <>
      <Layout>
        <NewsHeader>
          <Menu>소식</Menu>
          <SubTab>
            <Link href="/news/[category]" as="/news/school">
              <TabItem
                onClick={() => setSelectedTab("school")}
                selected={selectedTab === "school"}
              >
                학교
              </TabItem>
            </Link>
            <Link href="/news/[category]" as="/news/eduOffice">
              <TabItem
                onClick={() => setSelectedTab("eduOffice")}
                selected={selectedTab === "eduOffice"}
              >
                교육청
              </TabItem>
            </Link>
          </SubTab>
        </NewsHeader>
        {props.children}
      </Layout>
    </>
  );
};

export default News;

const Layout = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  position: relative;
  line-height: 150%;
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

const TabItem = styled.div<SubTabProps>`
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
