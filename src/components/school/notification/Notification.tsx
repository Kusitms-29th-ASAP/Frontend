import ListNumberBox from "./ListNumberBox";
import TitleBox from "./TitleBox";
import TopBox from "./TopBox";
import WhiteBox from "./WhiteBox";

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
      <TopBox isToday={isToday} />
      <TitleBox day={day} teacher={teacher} />
      <ListNumberBox data={notifications} />
    </WhiteBox>
  );
};

export default Notificaiton;
