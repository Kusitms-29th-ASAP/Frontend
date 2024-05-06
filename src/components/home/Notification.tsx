import { theme } from "@/styles/theme";
import Image from "next/image";
import styled from "styled-components";
import ListNumber from "../common/ListNumber";
import { notificationData } from "@/data/homeData";

const Notification = () => {
  return (
    <NotiContainer>
      <Title>
        오늘 알림장도 체크해요!
        <More>
          자세히 보기
          <Image
            src="/assets/icons/ic_chevron_right.svg"
            alt="right"
            width={20}
            height={20}
          />
        </More>
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
  line-height: 150%;
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

const More = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
  gap: 8px;
  color: ${theme.colors.b400};
  ${(props) => props.theme.fonts.caption1_m};
`;

const NotiList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
