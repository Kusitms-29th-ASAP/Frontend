import { theme } from "@/styles/theme";
import styled from "styled-components";
import { useState } from "react";
import Button from "../common/Button";
import Toast from "../common/Toast";
import CustomInput from "../common/CustomInput";
import { DatePicker } from "@mui/x-date-pickers-pro";
import Popup from "../common/Popup";

const AddTodoPopup = ({ onClose }: { onClose: () => void }) => {
  const [showToast, setShowToast] = useState(false);
  const [todo, setTodo] = useState("");
  const [deadline, setDeadline] = useState("");
  const [category, setCategory] = useState("");

  const handleCategoryChange = (value: string) => {
    setCategory(value);
  };

  const handleButtonClick = () => {
    // onClose();
    handleShowToast();
  };

  const handleShowToast = () => {
    setShowToast(true);
  };

  return (
    <Popup onClose={onClose} title="할 일 직접 추가하기" height="425px">
      <CustomInput
        value={todo}
        placeholder="할 일을 입력해주세요"
        onChange={(value: string) => setTodo(value)}
      />
      <RadioButtonGroup>
        {["가정통신문", "숙제", "준비물", "기타"].map((categoryName, index) => (
          <RadioButton
            key={index}
            selected={category === categoryName}
            onClick={() => handleCategoryChange(categoryName)}
          >
            {categoryName}
          </RadioButton>
        ))}
      </RadioButtonGroup>
      <SubTitle>
        언제까지 할 일인가요?
        <CustomInput
          value={deadline}
          placeholder="날짜를 선택해주세요"
          onChange={(value: string) => setDeadline(value)}
        />
      </SubTitle>
      <Button text="등록하기" onClick={handleButtonClick} />
      {showToast && (
        <Toast
          message="할 일이 추가되었어요!"
          type="basic"
          duration={2000}
          onClose={() => setShowToast(false)}
        />
      )}
    </Popup>
  );
};

export default AddTodoPopup;

const StyledAddTodo = styled.div`
  max-width: 480px;
  width: 100%;
  height: 425px;
  padding: 20px 20px 28px 20px;
  border-radius: 12px 12px 0px 0px;
  background: ${theme.colors.white};
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 200;
  color: ${theme.colors.b700};
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  ${(props) => props.theme.fonts.body1_b}
`;

const SubTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 87px;
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
