import styled from "styled-components";
import { Dispatch, useState } from "react";
import Popup from "@/components/common/Popup";
import Button from "@/components/common/Button";
import Checkbox from "@/components/common/Checkbox";

interface FormPopupProps {
  onClose: () => void;
  setShowToast?: Dispatch<React.SetStateAction<boolean>>;
}

const FormPopup = (props: FormPopupProps) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const { onClose, setShowToast } = props;

  const Title = `3학년 현장체험학습 실시 여부에 \n동의하시겠습니까?`;

  const isButtonEnabled = selectedOption !== null;

  const handleButtonClick = () => {
    onClose();
    setShowToast && setShowToast(true);
  };
  const handleCheckboxChange = (option: number) => {
    setSelectedOption(option);
  };

  return (
    <>
      <Popup onClose={onClose} title={Title} height="394px">
        <ContentBox>
          <CheckBoxContainer>
            <Checkbox
              checkboxType="checkBtn"
              label="동의함"
              checked={selectedOption === 0}
              onChange={() => handleCheckboxChange(0)}
            />
            <Checkbox
              checkboxType="checkBtn"
              label="동의하지 않음"
              checked={selectedOption === 1}
              onChange={() => handleCheckboxChange(1)}
            />
          </CheckBoxContainer>

          <Button
            text="제출하기"
            onClick={handleButtonClick}
            disabled={!isButtonEnabled}
          />
        </ContentBox>
      </Popup>
    </>
  );
};

export default FormPopup;

const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
