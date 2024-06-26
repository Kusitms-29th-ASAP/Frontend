import styled from "styled-components";
import { theme } from "@/styles/theme";
import Image from "next/image";
import ListBox from "../common/ListBox";
import { useEffect, useState } from "react";
import AddTodoPopup, { categories } from "./AddTodoPopup";
import Toast from "../common/Toast";
import Axios from "@/apis/axios";

interface Todo {
  todoId: number;
  description: string;
  todoType: string;
  deadline: string;
  status: string;
  isAssigned: boolean;
}

const Todo = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [addTodo, setAddTodo] = useState(false);
  const [todoData, setTodoData] = useState<Todo[]>([]);
  /* useEffect에서 의존성 배열로 넘기는, 렌더링 알림 역할 */
  const [render, setRenderData] = useState(false);
  const week = ["일", "월", "화", "수", "목", "금", "토"];

  /* 날짜를 yyyy-mm-dd 형식으로 변환하는 함수 */
  const formatDate = (date: Date) => {
    return date.toISOString().split("T")[0];
  };

  useEffect(() => {
    let formattedDate = formatDate(currentDate);
    Axios.get(`/api/v1/todos?date=${formattedDate}`)
      .then((response) => {
        const todoData: Todo[] = response.data.todoList;
        setTodoData(todoData);
      })
      .catch(() => {});
  }, [currentDate, render]);

  /* 상태 수정 API */
  const changeTodo = (todoId: number) => {
    Axios.put(`/api/v1/todos/${todoId}`).then((response) => {
      setRenderData(!render);
    });
  };

  /* Todo 삭제 API */
  const deleteTodo = (todoId: number) => {
    Axios.delete(`/api/v1/todos/${todoId}`)
      .then((response) => {
        setRenderData(!render);
      })
      .catch((error) => {});
  };

  /* deadline 날짜의 요일을 구하는 함수 */
  const getDayOfWeek = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();

    const isTomorrow =
      date.getFullYear() === today.getFullYear() &&
      date.getMonth() === today.getMonth() &&
      date.getDate() === today.getDate() + 1;

    return isTomorrow ? "내일" : week[date.getDay()] + "요일";
  };

  /* 이전 날짜 이동 */
  const handleBackDay = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - 1);
    setCurrentDate(newDate);
    setRenderData(!render);
  };

  /* 이후 날짜 이동 */
  const handleForwardDay = () => {
    const newDate = new Date(currentDate);
    // 오늘 날짜까지만 확인 가능
    if (getDayDifference(currentDate) > 0)
      newDate.setDate(currentDate.getDate() + 1);
    setCurrentDate(newDate);
    setRenderData(!render);
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
          style={{ cursor: "pointer" }}
        />
        {todayMonth}월 {todayDate}일 {dayOfWeek}요일
        {getDateString(currentDate)}
        <Image
          src="/assets/icons/ic_chevron_right.svg"
          alt="right"
          width={20}
          height={20}
          onClick={handleForwardDay}
          style={{
            opacity: isToday(currentDate) ? 0.5 : 1,
            cursor: isToday(currentDate) ? "" : "pointer",
          }}
        />
      </DateLine>
      <TodoLists>
        {todoData && todoData.length > 0 ? (
          todoData.map((data, index) => (
            <ListBox
              key={index}
              id={data.todoId}
              listboxType={data.isAssigned ? "check" : "direct"}
              color={data.deadline === "내일까지" ? "orange" : "mint"}
              type={
                categories.find((category) => category.value === data.todoType)
                  ?.label || data.todoType
              }
              onClick={() => {
                changeTodo(data.todoId);
              }}
              text={data.description}
              time={`${getDayOfWeek(data.deadline)}까지`}
              checked={data.status === "COMPLETE"}
              onDelete={() => deleteTodo(data.todoId)}
            />
          ))
        ) : (
          <NoData>할 일이 없어요!</NoData>
        )}
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
          render={render}
          setRenderData={setRenderData}
        />
      )}
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
  height: 205px;
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
  cursor: pointer;
`;

const NoData = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.primary300};
  ${(props) => props.theme.fonts.body3_m};
`;
