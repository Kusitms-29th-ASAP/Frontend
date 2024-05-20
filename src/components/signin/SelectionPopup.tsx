import Popup from "../common/Popup";
import Button from "../common/Button";
import styled from "styled-components";
import { GradeData } from "@/data/studentData";

interface SelectionPopupProps {
  onClose: () => void;
  onSelect: (value: number) => void;
  selectionList: number[];
}

const SelectionPopup = (props: SelectionPopupProps) => {
  const { onClose, onSelect, selectionList } = props;
  let title = "";
  let description = "";

  if (selectionList == GradeData) {
    title = "학년 선택";
    description = "학년";
  } else {
    title = "학급 선택";
    description = "반";
  }

  return (
    <>
      <Popup onClose={onClose} title={title} height="394px">
        <ButtonBox>
          {selectionList.map((value, index) => (
            <Button
              type="primaryBorder"
              text={`${value}${description}`}
              onClick={() => {
                onSelect(value);
                onClose();
              }}
              key={index}
            />
          ))}
        </ButtonBox>
      </Popup>
    </>
  );
};

export default SelectionPopup;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;
