import styled from "styled-components";
import { Dispatch, useState } from "react";
import Popup from "@/components/common/Popup";
import Button from "@/components/common/Button";
import CustomInput from "@/components/common/CustomInput";
import Calendar from "@/components/common/Calendar";
import CustomTextarea from "@/components/common/CustomTextarea";

interface FormPopupProps {
  type: "absent" | "work";
  onClose: () => void;
  setShowToast?: Dispatch<React.SetStateAction<boolean>>;
}

const Reason = `결석 이유를 자세히 입력해주세요. \n예) 질병(감기, 독감, 복통, 장염, 설사, 골절, 생리통 등)\n경조사(결혼, 장례) 천재지변(지진, 폭우, 폭설, 폭풍, 해일 등) 기타`;

const FormPopup = (props: FormPopupProps) => {
  const { type, onClose, setShowToast } = props;

  const [grade, setGrade] = useState("");
  const [classNum, setClassNum] = useState("");
  const [studentNum, setStudentNum] = useState("");
  const [studentName, setStudentName] = useState("");

  // 결석계
  const [reason, setReason] = useState("");
  const [date, setDate] = useState("");
  const [guardianName, setGuardianName] = useState("");

  // 체험학습
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [workContent, setWorkContent] = useState("");
  const [workReason, setWorkReason] = useState("");

  const isAbsentButtonEnabled =
    grade &&
    classNum &&
    studentNum &&
    studentName &&
    reason &&
    date &&
    guardianName;

  const isWorkButtonEnabled =
    grade &&
    classNum &&
    studentNum &&
    studentName &&
    destination &&
    startDate &&
    endDate &&
    workContent &&
    workReason;

  const handleButtonClick = () => {
    onClose();
    setShowToast && setShowToast(true);
  };

  return (
    <>
      <Popup
        onClose={onClose}
        title={type === "absent" ? "결석계" : "체험학습 신청서"}
        height="668px"
      >
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
          {type === "absent" ? (
            <>
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
            </>
          ) : (
            <>
              <div>
                <SubTitle>목적지를 입력해 주세요.</SubTitle>
                <CustomTextarea
                  value={destination}
                  placeholder={
                    "체험학습을 다녀올 목적지를 입력해 주세요.\n(ex. 일본, 제주도)"
                  }
                  onChange={(value: string) => setDestination(value)}
                  height={62}
                />
              </div>

              <div>
                <SubTitle>기간</SubTitle>
                <Calendar
                  value={startDate}
                  placeholder={"출발 날짜"}
                  onChange={setStartDate}
                />
                <Calendar
                  value={endDate}
                  placeholder={"도착 날짜"}
                  onChange={setEndDate}
                />
              </div>

              <div>
                <SubTitle>학습형태 및 내용</SubTitle>
                <CustomInput
                  value={workContent}
                  placeholder={
                    "체험학습 장소에서 새롭게 보고 느낄 내용을 작성해 주세요"
                  }
                  onChange={(value: string) => setWorkContent(value)}
                />
              </div>

              <div>
                <SubTitle>체험학습 사유</SubTitle>
                <CustomInput
                  value={workReason}
                  placeholder={"체험학습 사유를 작성해 주세요"}
                  onChange={(value: string) => setWorkReason(value)}
                />
              </div>
            </>
          )}
          <Button
            text="제출하기"
            onClick={handleButtonClick}
            disabled={
              type === "absent" ? !isAbsentButtonEnabled : !isWorkButtonEnabled
            }
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
