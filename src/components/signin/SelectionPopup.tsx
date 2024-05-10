import Popup from "../common/Popup";
import Button from "../common/Button";
import styled from "styled-components";

interface SelectionPopupProps {
  onClose: () => void;
  onSelect: (value: string) => void;
  selectionList: string[];
}

const SelectionPopup = (props: SelectionPopupProps) => {
  const { onClose, onSelect, selectionList } = props;

  return (
    <>
      <Popup onClose={onClose} title="학년 선택" height="394px">
        <ButtonBox>
          {selectionList.map((value, index) => (
            <Button
              buttonType="primaryBorder"
              text={value}
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
