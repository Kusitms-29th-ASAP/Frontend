"use client";

import Tabbar from "@/components/common/Tabbar";
import Meal from "@/components/home/Meal";
import Notification from "@/components/home/Notification";
import Ready from "@/components/home/Ready";
import Todo from "@/components/home/Todo";
import { RootState } from "@/redux/store";
import { theme } from "@/styles/theme";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Home = () => {
  const router = useRouter();
  const audio = useSelector((state: RootState) => state.audio.audio);

  useEffect(() => {}, [audio]);

  return (
    <>
      <HomeLayout>
        <Background></Background>
        <Container>
          <Header>
            홈
            <Image
              src="/assets/icons/ic_noti.svg"
              width={24}
              height={24}
              alt="noti"
              onClick={() => router.push("/home/notification")}
              style={{ cursor: "pointer" }}
            />
          </Header>
          <ReadyContainer>
            <TodoOverlay $audio={audio} />
            {audio && <AudioText>오늘 할 일을 들려드릴게요!</AudioText>}
            <Ready />
            <Todo />
            <Notification />
          </ReadyContainer>
          <Meal />
        </Container>
      </HomeLayout>
      <Tabbar />
    </>
  );
};

export default Home;

const HomeLayout = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 42px 20px;
  display: flex;
  flex-direction: column;
  gap: 23px;
  position: relative;
`;

const Background = styled.div`
  width: 100%;
  height: 334px;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(
    180deg,
    #ff8700 34.73%,
    rgba(255, 135, 0, 0.58) 92.45%,
    rgba(255, 135, 0, 0) 117.66%
  );
  border-radius: 0px 0px 24px 24px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px 20px;
  position: absolute;
  top: 0;
  left: 0;
`;

const Header = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: ${theme.colors.white};
  ${(props) => props.theme.fonts.body1_b};
`;

const ReadyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 9px 0px;
  gap: 31px;
  position: relative;
`;

const TodoOverlay = styled.div<{ $audio: boolean }>`
  position: fixed;
  background-color: ${({ $audio }) => ($audio ? "#00000078" : "transparent")};
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 2000;
  pointer-events: none;
`;

const AudioText = styled.div`
  position: absolute;
  top: 130px;
  left: 50%;
  transform: translateX(-50%);
  color: ${theme.colors.white};
  ${(props) => props.theme.fonts.heading2_b};
  z-index: 2000;
  white-space: nowrap;
`;
