"use client";

import Tabbar from "@/components/common/Tabbar";
import Meal from "@/components/home/Meal";
import Ready from "@/components/home/Ready";
import { theme } from "@/styles/theme";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const Home = () => {
  const router = useRouter();

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
          <Ready />
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
