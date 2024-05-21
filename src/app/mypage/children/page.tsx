"use client";

import Topbar from "@/components/common/Topbar";
import Image from "next/image";
import styled from "styled-components";
import Subtitle from "@/components/signin/Subtitle";
import CustomInput from "@/components/common/CustomInput";
import Calendar from "@/components/common/Calendar";
import { useEffect, useState } from "react";
import { theme } from "@/styles/theme";
import ChangeChildPopup from "@/components/mypage/ChangeChildPopup";
import AllergyPopup from "@/components/mypage/AllergyPopup";
import KeywordItem from "@/components/mypage/Keyword";
import Axios from "@/apis/axios";

interface Child {
  childName: string;
  schoolName: string;
  grade: number;
  className: number;
  childId: number;
  isPrimary?: boolean;
  birthday?: string;
  allergies?: string[];
}

const MyPage = () => {
  const [child, setChild] = useState<Child>({
    childName: "",
    schoolName: "",
    grade: 0,
    className: 0,
    childId: 0,
    isPrimary: true,
    birthday: "",
    allergies: [],
  });
  const [childList, setChildList] = useState<Child[]>([]);

  const [modify, setModify] = useState(false);
  const [changePopup, setChangePopup] = useState(false);
  const [allergyPopup, setAllergyPopup] = useState(false);

  const gradeImageSrc = `/assets/common/grade${child?.grade}.svg`;

  /* 선택 자녀 정보 불러오기 */
  useEffect(() => {
    Axios.get(`/api/v1/children/-71495`).then((response) => {
      const data = response.data;
      setChild(data);
      console.log("선택된 자녀", child);
    });
  }, []);

  /* 자녀 전체 불러오기 */
  useEffect(() => {
    Axios.get(`/api/v1/children`).then((response) => {
      const data = response.data.childList;
      setChildList(data);
      console.log("전체 자녀", childList);
    });
  }, []);

  /* onChange 함수 */
  const handleNameChange = (value: string) => {
    setChild({ ...child, childName: value });
    setModify(true);
  };

  const handleBirthdayChange = (value: string) => {
    setChild({ ...child, birthday: value });
    setModify(true);
  };

  const handleAllergiesChange = (value: string[]) => {
    setChild({ ...child, allergies: value });
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
  const handleAllergyUpdate = (selectedAllergies: string[]) => {
    setChild({ ...child, allergies: selectedAllergies });
    setAllergyPopup(false);
  };

  /* 자녀 프로필 업데이트 함수 */
  const handleChildUpdate = (selectedChild: Child) => {
    Axios.put(`/api/v1/children/3445442953`, {
      childName: child.childName,
      birthday: child.birthday,
      allergies: child.allergies,
    }).then(() => {
      console.log("자녀 프로필 변경완료");
    });
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
          <Br>{child?.childName}</Br>
          {child?.schoolName} | {child?.grade}학년 {child?.className}반
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
            value={child?.childName}
            onChange={handleNameChange}
            placeholder="성함"
          />
        </div>
        <div>
          <Subtitle>생년월일</Subtitle>
          <Calendar
            value={child.birthday + ""}
            onChange={handleBirthdayChange}
          />
        </div>
        <div>
          <Subtitle>알레르기 유발정보</Subtitle>
          <InputBox>
            <CustomInput
              inputType="select"
              value={child.allergies}
              onChange={handleAllergiesChange}
              placeholder="없음"
              onClick={() => setAllergyPopup(true)}
              hidden={true}
            />
            <KeywordItems>
              {child.allergies?.map((allergies, index) => (
                <KeywordItem key={index} keyword={allergies} />
              ))}
            </KeywordItems>
          </InputBox>
          {allergyPopup && (
            <AllergyPopup
              onClose={handleAllergyPopup}
              onUpdate={handleAllergyUpdate}
              initialCheckedItems={{
                ...child.allergies?.reduce(
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
          data={childList}
          currentChild={child}
          onChildSelect={handleChildUpdate}
        />
      )}
    </>
  );
};

export default MyPage;

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
