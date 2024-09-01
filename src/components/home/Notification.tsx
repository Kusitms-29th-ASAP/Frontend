import { theme } from "@/styles/theme";
import styled from "styled-components";
import ListNumber from "../common/ListNumber";
import More from "../common/More";
import Axios from "@/apis/axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Description {
  description: string;
}

interface Noti {
  announcementId: number;
  descriptions: Description[];
}

const Notification = () => {
  const router = useRouter();
  const [notiData, setNotiData] = useState<Description[]>();
  useEffect(() => {
    Axios.get(`/api/v1/classrooms/announcements/today`)
      .then((response) => {
        const notiData: Description[] = response.data.descriptions;
        setNotiData(notiData);
      })
      .catch(() => {});
  }, []);

  return (
    <NotiContainer>
      <Title>
        오늘 알림장도 체크해요!
        <More
          onClick={() => {
            router.push("/school/notification");
          }}
        />
      </Title>
      <NotiList>
        {notiData && notiData.length > 0 ? (
          notiData?.map((data, index) => (
            <ListNumber key={index} index={index + 1} text={data.description} />
          ))
        ) : (
          <NoData>알림 내용이 없어요!</NoData>
        )}
      </NotiList>
    </NotiContainer>
  );
};

export default Notification;

const NotiContainer = styled.div`
  width: 100%;
  min-height: 120px;
  padding: 16px;
  gap: 10px;
  border-radius: 10px;
  background: ${theme.colors.white};
  box-shadow: 0px 0px 64px 0px rgba(30, 41, 59, 0.1);
  ${(props) => props.theme.fonts.body2_b};
  color: ${theme.colors.b700};
  letter-spacing: -0.28px;
  z-index: 10;
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

export const NoData = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  color: ${theme.colors.primary300};
  ${(props) => props.theme.fonts.body3_m};
`;
