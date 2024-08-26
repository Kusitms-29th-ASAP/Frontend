import styled from "styled-components";
import { Dispatch, useState, useEffect } from "react";
import Popup from "@/components/common/Popup";
import Button from "@/components/common/Button";
import Checkbox from "@/components/common/Checkbox";
import { HomeGuideFormPopup } from "@/data/homeGuideData";

interface FormPopupProps {
  onClose: () => void;
  setShowToast?: Dispatch<React.SetStateAction<boolean>>;
}

const FormPopup = (props: FormPopupProps) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [language, setLanguage] = useState<string>("ko");

  const { onClose, setShowToast } = props;

  useEffect(() => {
    const lang = localStorage.getItem("language") || "ko";
    setLanguage(lang);
  }, []);

  const data = HomeGuideFormPopup[language as keyof typeof HomeGuideFormPopup];

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
      <Popup onClose={onClose} title={data.title} height="394px">
        <ContentBox>
          <CheckBoxContainer>
            <Checkbox
              checkboxType="checkBtn"
              label={data.agree}
              checked={selectedOption === 0}
              onChange={() => handleCheckboxChange(0)}
            />
            <Checkbox
              checkboxType="checkBtn"
              label={data.disagree}
              checked={selectedOption === 1}
              onChange={() => handleCheckboxChange(1)}
            />
          </CheckBoxContainer>

          <Button
            text={data.submit}
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
  margin-bottom: 80px;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: space-between;
`;
