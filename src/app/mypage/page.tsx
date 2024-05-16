"use client";

import Tabbar from "@/components/common/Tabbar";
import Topbar from "@/components/common/Topbar";
import { theme } from "@/styles/theme";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const Mypage = () => {
  const router = useRouter();

  return (
    <Container>
      <Padding>
        <Topbar text="마이페이지" />
      </Padding>
      <Background>
        <RowContainCard>
          <Col>
            <RowBottom>
              <Bold>임승현</Bold>
              <DarkGray>학부모님</DarkGray>
            </RowBottom>
            <Gray>010-1111-1111</Gray>
          </Col>
          <Row
            onClick={() => {
              router.push("/mypage/profile");
            }}
            style={{ cursor: "pointer" }}
          >
            <Image
              src="/assets/icons/ic_edit.svg"
              width={18}
              height={18}
              alt="edit"
            />
            <DarkGrayCap>프로필 수정</DarkGrayCap>
          </Row>
        </RowContainCard>
        <ColContainCard>
          <div>
            <Line>
              자녀관리
              <Image
                src="/assets/icons/ic_chevron_right.svg"
                width={20}
                height={20}
                alt="select"
                onClick={() => {
                  router.push("/mypage/children");
                }}
              />
            </Line>
            <ChildInfo>
              <span style={{ fontWeight: "700" }}>김동우&nbsp;</span>
              신용산 초등학교 3학년 7반
            </ChildInfo>
          </div>
          <Line>
            서류 제출 내역
            <Image
              src="/assets/icons/ic_chevron_right.svg"
              width={20}
              height={20}
              alt="select"
              onClick={() => {
                router.push("/mypage/document");
              }}
            />
          </Line>
        </ColContainCard>
        <ColContainCard>
          <div>로그아웃</div>
          <Gray>회원탈퇴</Gray>
        </ColContainCard>
      </Background>
      <Tabbar />
    </Container>
  );
};

export default Mypage;

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  position: relative;
`;

const Padding = styled.div`
  padding-left: 20px;
`;

const Background = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 20px;
  background: ${theme.colors.b80};
`;

const ContainCard = styled.div`
  display: flex;
  padding: 16px;
  border-radius: 12px;
  background: ${theme.colors.white};
  box-shadow: 0px 2px 64px 0px rgba(30, 41, 59, 0.06);
  color: ${theme.colors.b700};
  ${(props) => props.theme.fonts.body3_m};
`;

const RowContainCard = styled(ContainCard)`
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;
`;

const ColContainCard = styled(ContainCard)`
  flex-direction: column;
  gap: 24px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const RowBottom = styled(Row)`
  align-items: flex-end;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Line = styled(Row)`
  justify-content: space-between;
`;

const ChildInfo = styled.div`
  display: inline-flex;
  align-items: center;
  width: max-content;
  height: 30px;
  padding: 6px 12px;
  border-radius: 6px;
  border: 1px solid ${theme.colors.primary100};
  background: rgba(255, 135, 0, 0.15);
  color: ${theme.colors.primary500};
  text-align: center;
  ${(props) => props.theme.fonts.caption1_r};
`;

const Bold = styled.div`
  ${(props) => props.theme.fonts.body1_b}
`;

const Gray = styled.div`
  color: ${theme.colors.b400};
  ${(props) => props.theme.fonts.body3_r}
`;

const DarkGray = styled.div`
  color: ${theme.colors.b500};
  ${(props) => props.theme.fonts.body3_m};
`;

const DarkGrayCap = styled(DarkGray)`
  ${(props) => props.theme.fonts.caption1_r};
`;
