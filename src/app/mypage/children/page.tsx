"use client";

import Topbar from "@/components/common/Topbar";
import Image from "next/image";
import styled from "styled-components";
import Subtitle from "@/components/signin/Subtitle";
import CustomInput from "@/components/common/CustomInput";
import Calendar from "@/components/common/Calendar";
import { useState } from "react";
import { theme } from "@/styles/theme";
import ChangeChildPopup from "@/components/mypage/ChangeChildPopup";
import { childrenListData } from "@/data/mypageData";
import AllergyPopup from "@/components/mypage/AllergyPopup";
import KeywordItem from "@/components/mypage/Keyword";

interface Child {
  name: string;
  school: string;
  grade: number;
  class: number;
  birth: string;
  allergy: string[];
}

export const page = () => {
  const [child, setChild] = useState<Child>({
    name: "김동우",
    school: "신용산초등학교",
    grade: 3,
    class: 7,
    birth: "2014년 4월 5일",
    allergy: ["난류"],
  });

  const [modify, setModify] = useState(false);
  const [changePopup, setChangePopup] = useState(false);
  const [allergyPopup, setAllergyPopup] = useState(false);

  const gradeImageSrc = `/assets/images/grade${child.grade}.svg`;

  /* onChange 함수 */
  const handleNameChange = (value: string) => {
    setChild({ ...child, name: value });
    setModify(true);
    console.log(child.name);
  };

  const handleBirthChange = (value: string) => {
    setChild({ ...child, birth: value });
    setModify(true);
  };

  const handleAllergyChange = (value: string[]) => {
    setChild({ ...child, allergy: value });
    setModify(true);
  };

  /* 수정 완료 전환 함수 */
  const handleModify = () => {
    setModify(false);
    /* 자녀 프로필 변경사항 저장하기 */
  };

  /* 팝업 상태 전환 함수 */
  const handleChangePopup = () => {
    setChangePopup(false);
  };

  const handleAllergyPopup = () => {
    setAllergyPopup(false);
  };

  /* 알레르기 정보 업데이트 함수 (AllergyPopup 전달) */
  const handleAllergyUpdate = (selectedAllergy: string[]) => {
    setChild({ ...child, allergy: selectedAllergy });
    setAllergyPopup(false);
  };

  /* 자녀 프로필 업데이트 함수 */
  const handleChildUpdate = (selectedChild: Child) => {
    setChild(selectedChild);
    setChangePopup(false);
    setModify(true);
  };

  return (
    <>
      <Top>
        <Topbar text="자녀관리" icon={true} link="/mypage" />
        <ModifyButton onClick={handleModify} disabled={!modify}>
          수정 완료
        </ModifyButton>
      </Top>
      <Profile>
        <RoundImage
          src="/assets/images/round_graphic_big.svg"
          width={185}
          height={85}
          alt="round"
        />
        <GradeImage
          src={gradeImageSrc}
          width={124}
          height={124}
          alt="character"
        />
        <Info>
          <Br>{child.name}</Br>
          {child.school} | {child.grade}학년 {child.class}반
        </Info>
      </Profile>
      <Change onClick={() => setChangePopup(true)}>
        <Image
          src="/assets/icons/ic_flip_gray.svg"
          width={24}
          height={24}
          alt="change"
        />
        설정 자녀 전환하기
      </Change>
      <Content>
        <div>
          <Subtitle>이름</Subtitle>
          <CustomInput
            value={child.name}
            onChange={handleNameChange}
            placeholder="성함"
          />
        </div>
        <div>
          <Subtitle>생년월일</Subtitle>
          <Calendar value={child.birth} onChange={handleBirthChange} />
        </div>
        <div>
          <Subtitle>알레르기 유발정보</Subtitle>
          <InputBox>
            <CustomInput
              inputType="select"
              value={child.allergy}
              onChange={handleAllergyChange}
              placeholder="없음"
              onClick={() => setAllergyPopup(true)}
              hidden={true}
            />
            <KeywordItems>
              {child.allergy.map((allergy, index) => (
                <KeywordItem key={index} keyword={allergy} />
              ))}
            </KeywordItems>
          </InputBox>
          {allergyPopup && (
            <AllergyPopup
              onClose={handleAllergyPopup}
              onUpdate={handleAllergyUpdate}
              initialCheckedItems={{
                ...child.allergy.reduce(
                  (acc, curr) => ({ ...acc, [curr]: true }),
                  {}
                ),
              }}
              setModify={setModify}
            />
          )}
        </div>
      </Content>
      {changePopup && (
        <ChangeChildPopup
          onClose={handleChangePopup}
          data={[...childrenListData]}
          currentChild={child}
          onChildSelect={handleChildUpdate}
        />
      )}
    </>
  );
};

export default page;

const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ModifyButton = styled.button`
  border: none;
  background: none;
  color: ${theme.colors.primary500};
  ${(props) => props.theme.fonts.body3_m};
  cursor: pointer;

  &:disabled {
    color: ${theme.colors.b400};
    ${(props) => props.theme.fonts.body3_r}
  }
`;

const Profile = styled.div`
  width: 100%;
  height: 85px;
  border-radius: 12px;
  overflow: hidden;
  position: relative !important;
  margin-top: 12px;
  background: ${theme.colors.primary500};
`;

const RoundImage = styled(Image)`
  position: absolute;
  top: 0px;
  right: 0;
`;

const GradeImage = styled(Image)`
  position: absolute;
  bottom: -15px;
  right: 0;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: absolute;
  top: 0;
  left: 0;
  padding: 16px;
  color: ${theme.colors.white};
  ${(props) => props.theme.fonts.body3_m};
`;

const Br = styled.div`
  ${(props) => props.theme.fonts.heading2_m};
`;

const Change = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 8px 0 20px 0;
  color: ${theme.colors.b400};
  ${(props) => props.theme.fonts.caption1_m};
  cursor: pointer;
`;

const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const InputBox = styled.div`
  position: relative;
`;

const KeywordItems = styled.div`
  position: absolute;
  top: 8px;
  left: 10px;
  display: flex;
  gap: 10px;
`;
