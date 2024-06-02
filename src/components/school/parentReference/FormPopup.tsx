import styled from "styled-components";
import { Dispatch, useState } from "react";
import Popup from "@/components/common/Popup";
import Button from "@/components/common/Button";
import CustomInput from "@/components/common/CustomInput";
import Calendar from "@/components/common/Calendar";
import CustomTextarea from "@/components/common/CustomTextarea";
import { useRouter } from "next/navigation";

interface FormPopupProps {
  onClose: () => void;
  setShowToast?: Dispatch<React.SetStateAction<boolean>>;
}

const Reason = `결석 이유를 자세히 입력해주세요. \n예) 질병(감기, 독감, 복통, 장염, 설사, 골절, 생리통 등)\n경조사(결혼, 장례) 천재지변(지진, 폭우, 폭설, 폭풍, 해일 등) 기타`;

const FormPopup = (props: FormPopupProps) => {
  const { onClose, setShowToast } = props;

  const [grade, setGrade] = useState("");
  const [classNum, setClassNum] = useState("");
  const [studentNum, setStudentNum] = useState("");
  const [studentName, setStudentName] = useState("");
  const [reason, setReason] = useState("");
  const [date, setDate] = useState("");
  const [guardianName, setGuardianName] = useState("");
  const router = useRouter();

  const isButtonEnabled =
    grade &&
    classNum &&
    studentNum &&
    studentName &&
    reason &&
    date &&
    guardianName;

  const handleButtonClick = () => {
    onClose();
    setShowToast && setShowToast(true);
  };

  return (
    <>
      <Popup onClose={onClose} title="결석계" height="668px">
        <ContentBox>
          <div>
            <SubTitle>학생의 학년 반 번호를 입력해주세요.</SubTitle>
            <InputBox>
              <CustomInput
                value={grade}
                onChange={(value: string) => setGrade(value)}
                placeholder="학년"
              />
              <CustomInput
                value={classNum}
                onChange={(value: string) => setClassNum(value)}
                placeholder="반"
              />
              <CustomInput
                value={studentNum}
                placeholder="번호"
                onChange={(value: string) => setStudentNum(value)}
              />
            </InputBox>
          </div>

          <div>
            <SubTitle>학생의 이름을 입력해주세요.</SubTitle>
            <CustomInput
              value={studentName}
              placeholder="김자녀"
              onChange={(value: string) => setStudentName(value)}
            />
          </div>

          <div>
            <SubTitle>결석 사유 및 학부모 의견</SubTitle>
            <CustomTextarea
              value={reason}
              placeholder={Reason}
              onChange={(value: string) => setReason(value)}
              height={96}
            />
          </div>

          <div>
            <SubTitle>작성 일자</SubTitle>
            <Calendar value={date} onChange={setDate} />
          </div>

          <div>
            <SubTitle>보호자 성함</SubTitle>
            <CustomInput
              value={guardianName}
              placeholder={"보호자 성함을 입력해주세요"}
              onChange={(value: string) => setGuardianName(value)}
            />
          </div>

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

const SubTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  ${(props) => props.theme.fonts.body3_b};
`;

const InputBox = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
