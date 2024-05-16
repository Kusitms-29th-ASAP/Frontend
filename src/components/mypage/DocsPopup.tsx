import styled from "styled-components";
import CustomInput from "../common/CustomInput";
import Popup from "../common/Popup";
import Subtitle from "../signin/Subtitle";
import Calendar from "../common/Calendar";

interface DocsProps {
  onClose: () => void;
  data: {
    id: number;
    content1: string;
    content2: string;
    grade: string;
    class: string;
    number: string;
    name: string;
    reason: string;
    date: string;
    guardian: string;
  };
}

const DocsPopup = (props: DocsProps) => {
  const { onClose, data } = props;
  return (
    <Popup title="결석사유서 작성 내역" height="674px" onClose={onClose}>
      <Content>
        <div>
          <Subtitle>학생의 학년 반 번호를 입력해주세요.</Subtitle>
          <Row>
            <CustomInput
              value={data.grade}
              color="black"
              disabled={true}
              onChange={() => {}}
            />
            <CustomInput
              value={data.class}
              color="black"
              disabled={true}
              onChange={() => {}}
            />
            <CustomInput
              value={data.number}
              color="black"
              disabled={true}
              onChange={() => {}}
            />
          </Row>
        </div>
        <div>
          <Subtitle>학생의 이름을 입력해주세요.</Subtitle>
          <CustomInput
            value={data.name}
            color="black"
            disabled={true}
            onChange={() => {}}
          />
        </div>
        <div>
          <Subtitle>결석 및 학부모 의견</Subtitle>
          <CustomInput
            value={data.reason}
            color="black"
            disabled={true}
            onChange={() => {}}
          />
        </div>
        <div>
          <Subtitle>작성 일자</Subtitle>
          <Calendar
            value={data.date}
            color="black"
            disabled={true}
            onChange={() => {}}
          />
        </div>
        <div>
          <Subtitle>보호자 성함</Subtitle>
          <CustomInput
            value={data.guardian}
            color="black"
            disabled={true}
            onChange={() => {}}
          />
        </div>
      </Content>
    </Popup>
  );
};

export default DocsPopup;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
