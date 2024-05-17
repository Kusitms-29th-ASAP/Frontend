import styled from "styled-components";
import WhiteBox from "../WhiteBox";
import { useState } from "react";

const WeeklyNotificationData = [
  "목요일 체육시간에는 줄넘기 수행평가가 진행됩니다. 다양한 줄넘기를 잘 하는지 평가하기 때문에 가정에서 주말동안 연습시키는 것을 추천드립니다. \n\n금요일 음악시간에는 준비물로 리코더가 있습니다. 아이들이 리코더를 챙겨올 수 있도록 꼭 확인부탁드립니다. \n\n주말에 독후감 1편 쓰기가 숙제로 있습니다. 주말 독서를 할 수 있도록 지도해주시고, 책에 대한 내용을 정리해보고 글로 표현하는 연습을 할 수 있도록 챙겨주세요",
];

const WeeklyNotification = () => {
  const [month, setMonth] = useState(4);
  const [week, setWeek] = useState(2);

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
