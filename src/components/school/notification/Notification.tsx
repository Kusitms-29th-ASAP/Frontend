import ListNumberBox from "./ListNumberBox";
import TopContent from "./TopContent";
import WhiteBox from "../WhiteBox";

interface NotificationProps {
  day: Date;
  teacher: string;
  notifications: string[];
  isToday: boolean;
}

const Notificaiton = (props: NotificationProps) => {
  const { day, teacher, notifications, isToday } = props;

  return (
    <WhiteBox>
      <TopContent isToday={isToday} day={day} teacher={teacher} />
      <ListNumberBox data={notifications} />
    </WhiteBox>
  );
};

export default Notificaiton;
