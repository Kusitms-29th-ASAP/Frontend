"use client";

import Tabbar from "@/components/common/Tabbar";
import { theme } from "@/styles/theme";
import { usePathname, useRouter } from "next/navigation";
import styled from "styled-components";

const News = (props: any) => {
  const router = useRouter();
  const pathname = usePathname();

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
        {props.children}
      </Layout>
      <Tabbar />
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
