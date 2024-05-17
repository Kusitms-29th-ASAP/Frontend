import styled from "styled-components";
import Popup from "../common/Popup";
import ChildProfile from "./ChildProfile";
import Button from "../common/Button";
import { ChildrenList } from "@/data/mypageData";
import { theme } from "@/styles/theme";
import { useState } from "react";

interface Child {
  name: string;
  school: string;
  grade: number;
  class: number;
  birth: string;
  allergy: string[];
}

interface ChangeChildProps {
  onClose: () => void;
  data: Child[];
  currentChild: Child;
  onChildSelect: (selectedChild: Child) => void;
}

const ChangeChildPopup = (props: ChangeChildProps) => {
  const { onClose, data, currentChild, onChildSelect } = props;
  const [selectedChild, setSelectedChild] = useState<Child | null>(null);

  const handleSelectChild = (child: Child) => {
    /* 자녀 정보 요청, 변경 */
    setSelectedChild(child);
  };

  const handleConfirm = () => {
    if (selectedChild && selectedChild.name !== currentChild.name) {
      onChildSelect(selectedChild);
      onClose();
    }
  };

  return (
    <Popup
      title="자녀 변경하기"
      height="425px"
      onClose={onClose}
      noPadding={true}
    >
      <Gap>
        {data.map((data, index) => (
          <ChildProfile
            key={index}
            name={data.name}
            school={data.school}
            grade={data.grade}
            classInfo={data.class}
            onClick={() => handleSelectChild(data)}
            selected={selectedChild?.name === data.name}
          />
        ))}
      </Gap>
      <Bottom>
        <Button
          text="선택완료"
          onClick={handleConfirm}
          disabled={!selectedChild || selectedChild.name === currentChild.name}
        />
      </Bottom>
    </Popup>
  );
};

export default ChangeChildPopup;

const Gap = styled.div`
  display: flex;
  padding: 0 20px;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 23px;
  overflow-y: auto;
  position: relative !important;
`;

const Bottom = styled.div`
  width: 100%;
  height: 97px;
  display: flex;
  padding: 16px 20px 28px 20px;
  justify-content: center;
  align-items: center;
  background: ${theme.colors.white};
  position: sticky;
  bottom: 0;
  left: 0;
  z-index: 200;
`;
