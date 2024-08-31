import { theme } from "@/styles/theme";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Button from "../common/Button";
import CustomInput from "../common/CustomInput";
import Popup from "../common/Popup";
import Calendar from "../common/Calendar";
import Axios from "@/apis/axios";
import {
  addTodoMessage,
  categories,
  LanguageKeys,
  submitMessage,
  whenTodoMessage,
} from "@/data/todoData";

interface AddTodoPopupProps {
  onClose: () => void;
  setShowToast: React.Dispatch<React.SetStateAction<boolean>>;
  render: boolean;
  setRenderData: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddTodoPopup = ({
  onClose,
  setShowToast,
  render,
  setRenderData,
}: AddTodoPopupProps) => {
  const [todo, setTodo] = useState("");
  const [category, setCategory] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const isButtonEnabled = todo !== "" && category !== "" && selectedDate !== "";
  const [language, setLanguage] = useState<string>("ko");

  useEffect(() => {
    setLanguage(localStorage.getItem("language") || "ko");
  }, []);

  const handleCategoryChange = (value: string) => {
    setCategory(value);
  };

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
  };

  // 날짜 형식 변환(년월일 -> yyyy-mm-dd) 함수
  const formatDate = (dateString: string) => {
    const dateParts = dateString.split(/[년월일\s]+/).filter(Boolean);
    if (dateParts.length === 3) {
      const [year, month, day] = dateParts;
      const formattedMonth = month.padStart(2, "0");
      const formattedDay = day.padStart(2, "0");
      return `${year}-${formattedMonth}-${formattedDay}`;
    }
    return dateString;
  };

  const handleButtonClick = () => {
    const formattedDate = formatDate(selectedDate);
    Axios.post(`/api/v1/todos`, {
      description: todo,
      todoType: category,
      deadline: formattedDate,
    })
      .then((response) => {
        onClose();
        setShowToast(true);
        setRenderData(!render);
      })
      .catch((error) => {});
  };

  return (
    <>
      <Popup
        onClose={onClose}
        title={`${addTodoMessage[language as keyof typeof addTodoMessage]}`}
        height="435px"
      >
        <CustomInput
          value={todo}
          placeholder="할 일을 입력해주세요"
          onChange={(value: string) => setTodo(value)}
        />
        <RadioButtonGroup>
          {categories.map((categoryItem, index) => (
            <RadioButton
              key={index}
              selected={category === categoryItem.value}
              onClick={() => handleCategoryChange(categoryItem.value)}
            >
              {categoryItem.label[language as LanguageKeys]}
            </RadioButton>
          ))}
        </RadioButtonGroup>
        <SubTitle>
          {whenTodoMessage[language as keyof typeof whenTodoMessage]}
          <Calendar value={selectedDate} onChange={handleDateChange} />
        </SubTitle>
        <Button
          text={`${submitMessage[language as keyof typeof submitMessage]}`}
          onClick={handleButtonClick}
          disabled={!isButtonEnabled}
        />
      </Popup>
    </>
  );
};

export default AddTodoPopup;

const SubTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 42px;
  ${(props) => props.theme.fonts.body3_b}
`;

const RadioButtonGroup = styled.div`
  height: 35px;
  display: flex;
  margin: 12px 0px 24px 0px;
  gap: 8px;
`;

const RadioButton = styled.label<{ selected: boolean }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 6px 12px;
  border-radius: 8px;
  border: ${(props) =>
    props.selected ? `1px solid ${theme.colors.primary500}` : "none"};
  background-color: ${(props) =>
    props.selected ? "rgba(255, 135, 0, 0.15)" : "rgba(255, 135, 0, 0.1)"};
  color: ${(props) =>
    props.selected ? theme.colors.primary500 : theme.colors.b500};
  cursor: pointer;
  ${(props) => props.theme.fonts.body3_m};
`;
