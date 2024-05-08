import styled from "styled-components";
import { theme } from "@/styles/theme";
import Image from "next/image";
import ListBox from "../common/ListBox";
import { todoData } from "@/data/homeData";
import { useState } from "react";
import AddTodoPopup from "./AddTodoPopup";
import Toast from "../common/Toast";

const Todo = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [addTodo, setAddTodo] = useState(false);
  const week = ["일", "월", "화", "수", "목", "금", "토"];

  /* 이전 날짜 이동 */
  const handleBackDay = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - 1);
    setCurrentDate(newDate);
  };

  /* 이후 날짜 이동 */
  const handleForwardDay = () => {
    const newDate = new Date(currentDate);
    // 오늘 날짜까지만 확인 가능
    if (getDayDifference(currentDate) > 0)
      newDate.setDate(currentDate.getDate() + 1);
    setCurrentDate(newDate);
  };

  /* 화면에 나오는 날짜 */
  const todayMonth = currentDate.getMonth() + 1;
  const todayDate = currentDate.getDate();
  const dayOfWeek = week[currentDate.getDay()];

  /* 오늘 날짜인지 확인 */
  const isToday = (date: any) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  /* 날짜(일수) 차이 계산 */
  const getDayDifference = (date: any) => {
    const today = new Date();
    const diffInMs = today.getTime() - date.getTime();
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    return diffInDays;
  };

  /* 날짜(일수) 차이 문자열 */
  const getDateString = (date: any) => {
    if (isToday(date)) {
      return <span style={{ color: theme.colors.primary500 }}>오늘</span>;
    } else {
      const diff = getDayDifference(date);
      return (
        <span style={{ color: theme.colors.primary500 }}>
          {diff > 0 ? `${diff}일 전` : `${-diff}일 후`}
        </span>
      );
    }
  };

  /* Toast 메세지 유무 */
  const [showToast, setShowToast] = useState(false);

  const handleOpenAddTodo = () => {
    setAddTodo(true);
  };

  const handleCloseAddTodo = () => {
    setAddTodo(false);
  };

  return (
    <TodoContainer>
      오늘 할 일 잊지마세요!
      <DateLine>
        <Image
          src="/assets/icons/ic_chevron_left.svg"
          alt="left"
          width={20}
          height={20}
          onClick={handleBackDay}
        />
        {todayMonth}월 {todayDate}일 {dayOfWeek}요일
        {getDateString(currentDate)}
        <Image
          src="/assets/icons/ic_chevron_right.svg"
          alt="right"
          width={20}
          height={20}
          onClick={handleForwardDay}
          style={{ opacity: isToday(currentDate) ? 0.5 : 1 }}
        />
      </DateLine>
      <TodoLists>
        {todoData.map((data, index) => (
          <ListBox
            key={index}
            listboxType={data.direct ? "direct" : "check"}
            color={data.time === "내일까지" ? "orange" : "mint"}
            type={data.type}
            text={data.text}
            time={data.time}
          />
        ))}
      </TodoLists>
      <Plus>
        <PlusButton onClick={handleOpenAddTodo}>
          <Image
            src="/assets/icons/ic_plus.svg"
            alt="add"
            width={20}
            height={20}
          />
          할 일 직접 추가하기
        </PlusButton>
      </Plus>
      {addTodo && (
        <AddTodoPopup
          onClose={handleCloseAddTodo}
          setShowToast={setShowToast}
        />
      )}
      {/* {addTodo && <Overlay onClick={handleCloseAddTodo} />} */}
      {showToast && (
        <Toast
          message="할 일이 추가되었어요!"
          type="basic"
          duration={2000}
          onClose={() => setShowToast(false)}
        />
      )}
    </TodoContainer>
  );
};

export default Todo;

const TodoContainer = styled.div`
  width: 100%;
  padding: 16px;
  gap: 10px;
  border-radius: 10px;
  background: ${theme.colors.white};
  box-shadow: 0px 0px 64px 0px rgba(30, 41, 59, 0.1);
  ${(props) => props.theme.fonts.body2_b};
  color: ${theme.colors.b700};
  z-index: 10;
  line-height: 150%;
  letter-spacing: -0.28px;
  position: relative;
`;

const DateLine = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
  ${(props) => props.theme.fonts.body3_m};
  gap: 8px;
`;

const TodoLists = styled.div`
  width: 100%;
  height: 210px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 20px;
  margin-bottom: 8px;
`;

const Plus = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const PlusButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  gap: 4px;
  color: ${theme.colors.primary500};
  text-align: right;
  ${(props) => props.theme.fonts.body3_m};
  background: none;
  border: none;
  transition:
    color 200ms,
    background-color 200ms;
  &:active {
    border-radius: 8px;
    background: rgba(255, 135, 0, 0.1);
  }
`;

const Overlay = styled.div`
  max-width: 480px;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.6);
  z-index: 10;
`;
