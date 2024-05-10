import { theme } from "@/styles/theme";
import styled from "styled-components";
import ListNumber from "../common/ListNumber";
import { notificationData } from "@/data/homeData";
import More from "../common/More";

const Notification = () => {
  return (
    <NotiContainer>
      <Title>
        오늘 알림장도 체크해요!
        <More onClick={() => console.log("페이지 이동")} />
      </Title>
      <NotiList>
        {notificationData.map((data, index) => (
          <ListNumber key={index} index={index + 1} text={data} />
        ))}
      </NotiList>
    </NotiContainer>
  );
};

export default Notification;

const NotiContainer = styled.div`
  width: 100%;
  padding: 16px;
  gap: 10px;
  border-radius: 10px;
  margin-bottom: 26px;
  background: ${theme.colors.white};
  box-shadow: 0px 0px 64px 0px rgba(30, 41, 59, 0.1);
  ${(props) => props.theme.fonts.body2_b};
  color: ${theme.colors.b700};
  letter-spacing: -0.28px;
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const NotiList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
