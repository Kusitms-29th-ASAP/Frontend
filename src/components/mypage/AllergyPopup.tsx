import { AllergyCategories } from "@/data/allergyData";
import Checkbox from "../common/Checkbox";
import Popup from "../common/Popup";
import Subtitle from "../signin/Subtitle";
import { useState } from "react";
import styled from "styled-components";
import Button from "../common/Button";
import { theme } from "@/styles/theme";

interface AllergyProps {
  onClose: () => void;
  onUpdate: (selectedAllergy: string[]) => void;
  initialCheckedItems: { [key: string]: boolean };
  setModify: React.Dispatch<React.SetStateAction<boolean>>;
}

const AllergyPopup = (props: AllergyProps) => {
  const { onClose, onUpdate, initialCheckedItems, setModify } = props;

  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>(
    initialCheckedItems
  );

  //   useEffect(() => {
  //     setCheckedItems(initialCheckedItems); // 체크된 항목이 변경될 때 업데이트
  //   }, [initialCheckedItems]);

  const handleCheckboxChange = (item: string) => {
    setCheckedItems((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  const handleCheckComplete = () => {
    /* 체크정보 저장 */
    const selectedAllergy = Object.keys(checkedItems).filter(
      (item) => checkedItems[item]
    );
    onUpdate(selectedAllergy);
    setModify(true);
    onClose();
  };

  return (
    <Container>
      <Popup
        title="알레르기 유발 정보"
        height="718px"
        onClose={onClose}
        noPadding={true}
      >
        <ContentBox>
          {AllergyCategories.map((category) => (
            <div key={category.name}>
              <Subtitle>{category.name}</Subtitle>
              <CheckboxBox>
                {category.items.map((item) => (
                  <Checkbox
                    key={item}
                    label={item}
                    checkboxType="checkBtn"
                    checked={checkedItems[item] || false}
                    onChange={() => handleCheckboxChange(item)}
                  />
                ))}
              </CheckboxBox>
            </div>
          ))}
        </ContentBox>
        <Bottom>
          <Button
            text="선택완료"
            disabled={Object.values(checkedItems).every((value) => !value)}
            onClick={handleCheckComplete}
          />
        </Bottom>
      </Popup>
    </Container>
  );
};

export default AllergyPopup;

const Container = styled.div`
  width: 100%;
`;

const ContentBox = styled.div`
  width: 100%;
  height: calc(100% - 97px);
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 36px 0 23px 0;
  overflow-y: auto;
  position: relative !important;
`;

const CheckboxBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
`;

const Bottom = styled.div`
  width: 100%;
  height: 97px;
  display: flex;
  padding: 16px 20px 28px 20px;
  justify-content: center;
  align-items: center;
  background: ${theme.colors.white};
  box-shadow: 0px 3px 44px 0px rgba(30, 41, 59, 0.15);
  position: sticky;
  bottom: 0;
  left: 0;
  z-index: 200;
`;
