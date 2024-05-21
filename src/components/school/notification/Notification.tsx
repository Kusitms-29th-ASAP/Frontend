import ListNumberBox from "./ListNumberBox";
import TopContent from "./TopContent";
import WhiteBox from "../WhiteBox";
import { NoData } from "@/components/home/Notification";

interface Description {
  description: string;
}

interface Noti {
  announcementId: number;
  descriptions: Description[];
}

interface Announcement {
  descriptions: Description[];
  writeDate: string;
}

interface NotificationProps {
  day: string;
  teacher: string;
  notifications: Noti | Announcement | undefined;
  isToday: boolean;
}

const Notificaiton = (props: NotificationProps) => {
  const { day, teacher, notifications, isToday } = props;

  return (
    <WhiteBox>
      <TopContent isToday={isToday} day={day} teacher={teacher} />
      {notifications && notifications.descriptions.length > 0 ? (
        <ListNumberBox data={notifications.descriptions} />
      ) : (
        <NoData>알림 내용이 없어요!</NoData>
      )}
    </WhiteBox>
  );
};

export default Notificaiton;
