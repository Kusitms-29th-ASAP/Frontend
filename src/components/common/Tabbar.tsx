import React, { useState } from "react";
import styled from "styled-components";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { theme } from "@/styles/theme";
import { tabs } from "@/data/commonData";

interface TabProps {
  selected: boolean;
}

const Tabbar = () => {
  const pathname = usePathname();
  const [selected, setSelected] = useState(pathname);
  const router = useRouter();

  const handleTabClick = (path: any) => {
    setSelected(path);
    router.push(path);
  };

  return (
    <Container>
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          onClick={() => handleTabClick(tab.path)}
          selected={pathname === tab.path || pathname === tab.subPath}
        >
          <Bar selected={pathname === tab.path || pathname === tab.subPath} />
          <Image
            src={`/assets/icons/${selected === tab.path || selected === tab.subPath ? tab.icon + "_select" : tab.icon}.svg`}
            width="24"
            height="24"
            alt={tab.label}
          />
          {tab.label}
        </Tab>
      ))}
    </Container>
  );
};

export default Tabbar;

const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 34px;
  background-color: ${theme.colors.white};
  position: sticky;
  bottom: 0;
  left: 0;
  z-index: 500;
`;

const Tab = styled.div<TabProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  text-align: center;
  color: ${({ selected, theme }) =>
    selected ? theme.colors.primary600 : theme.colors.b400};
  ${(props) => props.theme.fonts.caption3_r}
  gap: 2px;
`;

const Bar = styled.div<TabProps>`
  width: 24px;
  height: 4px;
  border-radius: 4px;
  background: ${theme.colors.primary600};
  opacity: ${({ selected }) => (selected ? "100%" : "0%")};
`;
