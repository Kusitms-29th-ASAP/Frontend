import styled from "styled-components";
import WhiteBox from "../WhiteBox";
import { useState } from "react";

const WeeklyNotificationData = [
  "1. 5/21 (화) 에는 ‘우리 고장 알기' 수업으로 해설사 초빙 수업이 있습니다.\n\n2. 안전한 등하교를 위해 자전거, 인라인 등을 타지 않으며, 수업 종료 후 곧바로 귀가해요.\n\n3. 하지 말아요 학교 폭력, 실천해요 친구사랑!\n\n4. 등하교길 어린이 교통사고 예방을 위한 보행안전 3원칙 기억하기\n: 서다 - 보다 - 걷다",
];

const WeeklyNotification = () => {
  const [month, setMonth] = useState(5);
  const [week, setWeek] = useState(4);

  return (
    <WhiteBox>
      <Container>
        <div>
          <Title>주간 선생님 가정통신</Title>
          <Date>
            {month}월 {week}주차
          </Date>
        </div>
        <Content>{WeeklyNotificationData}</Content>
      </Container>
    </WhiteBox>
  );
};

export default WeeklyNotification;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Title = styled.div`
  ${({ theme }) => theme.fonts.body2_b};
  color: ${({ theme }) => theme.colors.b700};
`;

const Date = styled.div`
  ${({ theme }) => theme.fonts.caption1_m};
  color: ${({ theme }) => theme.colors.b400};
`;

const Content = styled.div`
  ${({ theme }) => theme.fonts.body3_m};
  color: ${({ theme }) => theme.colors.b600};
`;
