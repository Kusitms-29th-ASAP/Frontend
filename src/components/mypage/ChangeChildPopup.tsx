import styled from "styled-components";
import Popup from "../common/Popup";
import ChildProfile from "./ChildProfile";
import Button from "../common/Button";
import { theme } from "@/styles/theme";
import { useEffect, useState } from "react";
import Axios from "@/apis/axios";

interface Child {
  childName: string;
  schoolName: string;
  grade: number;
  classroomName: number;
  childId?: number;
  isPrimary?: boolean;
  birthday?: string;
  allergies?: string[];
}

interface ChangeChildProps {
  onClose: () => void;
  data: Child[];
  currentChild: Child;
  onChildSelect: (selectedChild: Child) => void;
  use: boolean;
  setUse: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChangeChildPopup = (props: ChangeChildProps) => {
  const { onClose, data, currentChild, onChildSelect, use, setUse } = props;
  const [selectedChild, setSelectedChild] = useState<Child | null>(
    currentChild
  );

  useEffect(() => {}, [selectedChild]);

  const handleSelectChild = (child: Child) => {
    /* 자녀 정보 요청, 변경 */
    setSelectedChild(child);
  };

  const handleConfirm = () => {
    Axios.put(`/api/v1/children/primary`, {
      childId: selectedChild?.childId,
    }).then(() => {
      setUse(!use);
      if (selectedChild) {
        onChildSelect(selectedChild);
        onClose();
      }
    });
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
            name={data.childName}
            school={data.schoolName}
            grade={data.grade}
            classInfo={data.classroomName}
            onClick={() => handleSelectChild(data)}
            selected={selectedChild?.childName === data.childName}
          />
        ))}
      </Gap>
      <Bottom>
        <Button
          text="선택완료"
          onClick={handleConfirm}
          disabled={
            !selectedChild || selectedChild.childName === currentChild.childName
          }
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
