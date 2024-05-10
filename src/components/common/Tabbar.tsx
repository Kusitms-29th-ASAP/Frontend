import React, { useState } from "react";
import styled from "styled-components";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { theme } from "@/styles/theme";

interface TabProps {
  selected: boolean;
}

const Tabbar = () => {
  const pathname = usePathname();
  const [selected, setSelected] = useState("/home");
  const router = useRouter();

  const handleTabClick = (path: any) => {
    setSelected(path);
    router.push(path);
  };

  return (
    <Container>
      <Tab onClick={() => handleTabClick("/home")} selected={selected === "/"}>
        <Bar selected={pathname === "/home"} />
        {pathname === "/home" ? (
          <>
            <Image
              src="/assets/icons/ic_home_select.svg"
              width="24"
              height="24"
              alt="home"
            />
          </>
        ) : (
          <Image
            src="/assets/icons/ic_home.svg"
            width="24"
            height="24"
            alt="home"
          />
        )}
        홈
      </Tab>
      <Tab
        onClick={() => handleTabClick("/school")}
        selected={pathname === "/school"}
      >
        <Bar selected={pathname === "/school"} />
        {pathname === "/school" ? (
          <Image
            src="/assets/icons/ic_edu_select.svg"
            width="24"
            height="24"
            alt="edu"
          />
        ) : (
          <Image
            src="/assets/icons/ic_edu.svg"
            width="24"
            height="24"
            alt="edu"
          />
        )}
        학교 생활
      </Tab>
      <Tab
        onClick={() => handleTabClick("/news/school")}
        selected={pathname === "/news/school" || pathname === "/news/eduOffice"}
      >
        <Bar
          selected={
            pathname === "/news/school" || pathname === "/news/eduOffice"
          }
        />
        {pathname === "/news/school" || pathname === "/news/eduOffice" ? (
          <Image
            src="/assets/icons/ic_class_select.svg"
            width="24"
            height="24"
            alt="class"
          />
        ) : (
          <Image
            src="/assets/icons/ic_class.svg"
            width="24"
            height="24"
            alt="class"
          />
        )}
        소식
      </Tab>
      <Tab
        onClick={() => handleTabClick("/study")}
        selected={pathname === "/study"}
      >
        <Bar selected={pathname === "/study"} />
        {pathname === "/study" ? (
          <Image
            src="/assets/icons/ic_study_select.svg"
            width="24"
            height="24"
            alt="study"
          />
        ) : (
          <Image
            src="/assets/icons/ic_study.svg"
            width="24"
            height="24"
            alt="study"
          />
        )}
        가정학습
      </Tab>
      <Tab
        onClick={() => handleTabClick("/mypage")}
        selected={pathname === "/mypage"}
      >
        <Bar selected={pathname === "/mypage"} />
        {pathname === "/mypage" ? (
          <Image
            src="/assets/icons/ic_mypage_select.svg"
            width="24"
            height="24"
            alt="mypage"
          />
        ) : (
          <Image
            src="/assets/icons/ic_mypage.svg"
            width="24"
            height="24"
            alt="mypage"
          />
        )}
        마이페이지
      </Tab>
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
