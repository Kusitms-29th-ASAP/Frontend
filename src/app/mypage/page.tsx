"use client";

import deleteUser from "@/apis/auth/deleteUser";
import Axios from "@/apis/axios";
import getUserInfo from "@/apis/user/getUserInfo";
import Checkbox from "@/components/common/Checkbox";
import CustomInput from "@/components/common/CustomInput";
import Tabbar from "@/components/common/Tabbar";
import Topbar from "@/components/common/Topbar";
import { FONT_SIZE } from "@/constants/font";
import { LANGUAGE } from "@/constants/language";
import { RootState } from "@/redux/store";
import { theme } from "@/styles/theme";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

export interface Child {
  childName: string;
  schoolName: string;
  grade: number;
  classroomName: number;
  childId?: number;
  isPrimary?: boolean;
  birthday?: string;
  allergies?: string[];
}

const Mypage = () => {
  const router = useRouter();
  const tokens = useSelector((state: RootState) => state.auth);
  const { refreshToken } = tokens;

  const [child, setChild] = useState<Child>({
    childName: "",
    schoolName: "",
    grade: 0,
    classroomName: 0,
    childId: 0,
    isPrimary: true,
    birthday: "",
    allergies: [],
  });
  const [childList, setChildList] = useState<Child[]>([]);
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [language, setLanguage] = useState<string>("");
  const [fontSize, setFontSize] = useState<number>(FONT_SIZE[0].id);
  const [openDropdown, setOpenDropdown] = useState(false);

  const userInfo = async () => {
    const data = await getUserInfo();
    setUserName(data.userName);
    setPhoneNumber(data.phoneNumber);
  };
  userInfo();

  function formatPhoneNumber(phoneNumber: string) {
    return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 7)}-${phoneNumber.slice(7)}`;
  }
  const newPhoneNumber = formatPhoneNumber(phoneNumber);

  const handleTypeSelectClick = () => {
    setOpenDropdown(!openDropdown);
  };

  const handleSelectDrop = (selectedDrop: string) => {
    setLanguage(selectedDrop);
    setOpenDropdown(false);

    const selectedLanguage = LANGUAGE.find(
      (lang) => lang.text === selectedDrop
    );

    if (selectedLanguage) {
      localStorage.setItem("language", selectedLanguage.eng);
    }
  };

  const handleCheckboxChange = (item: { id: number }) => {
    setFontSize(item.id);

    localStorage.setItem("fontSize", item.id.toString());
  };

  const handleLogout = () => {
    deleteUser(refreshToken);
    router.push("/");
  };
  const handleDeleteUser = () => {};

  /* 선택 자녀 불러오기 */
  useEffect(() => {
    if (childList.length > 0) {
      const primaryChild = childList.find((child) => child.isPrimary);
      Axios.get(`/api/v1/children/${primaryChild?.childId}`).then(
        (response) => {
          const data = response.data;
          setChild(data);
        }
      );
    }
  }, [childList]);

  /* 자녀 전체 불러오기 */
  useEffect(() => {
    Axios.get(`/api/v1/children`).then((response) => {
      const data = response.data.childList;
      setChildList(data);
    });
  }, []);

  /* 언어 및 폰트 정보 불러오기 */
  useEffect(() => {
    const storedLanguageEng = localStorage.getItem("language");
    if (storedLanguageEng) {
      const matchingLanguage = LANGUAGE.find(
        (lang) => lang.eng === storedLanguageEng
      );
      if (matchingLanguage) {
        setLanguage(matchingLanguage.text);
      }
    } else {
      localStorage.setItem("language", "한국어");
    }

    const storedFontSize = localStorage.getItem("fontSize");
    if (storedFontSize) {
      setFontSize(parseInt(storedFontSize));
    } else {
      localStorage.setItem("fontSize", 0 + "");
    }
  }, []);

  return (
    <Container>
      <Padding>
        <Topbar text="마이페이지" icon={false} />
      </Padding>
      <Background>
        <RowContainCard>
          <Col>
            <RowBottom>
              <Bold>{userName}</Bold>
              <DarkGray>학부모님</DarkGray>
            </RowBottom>
            <Gray>{newPhoneNumber}</Gray>
          </Col>
          <Row
            onClick={() => {
              router.push("/mypage/profile");
            }}
            style={{ cursor: "pointer" }}
          >
            <Image
              src="/assets/icons/ic_edit.svg"
              width={18}
              height={18}
              alt="edit"
            />
            <DarkGrayCap>프로필 수정</DarkGrayCap>
          </Row>
        </RowContainCard>
        <ColContainCard>
          <div>
            <Line>
              자녀관리
              <Image
                src="/assets/icons/ic_chevron_right.svg"
                width={20}
                height={20}
                alt="select"
                onClick={() => {
                  router.push(`/mypage/children`);
                }}
                style={{ cursor: "pointer" }}
              />
            </Line>
            <ChildInfo>
              <span style={{ fontWeight: "700" }}>{child.childName}&nbsp;</span>
              {child.schoolName} {child.grade}학년 {child.classroomName}반
            </ChildInfo>
          </div>
          <Line>
            서류 제출 내역
            <Image
              src="/assets/icons/ic_chevron_right.svg"
              width={20}
              height={20}
              alt="select"
              onClick={() => {
                router.push("/mypage/document");
              }}
              style={{ cursor: "pointer" }}
            />
          </Line>
        </ColContainCard>
        <ColContainCard>
          <Title>환경설정</Title>
          <div>
            <Label>언어</Label>
            <Box>
              <StyledInput
                value={language}
                onClick={handleTypeSelectClick}
                onChange={() => {}}
                placeholder="언어"
                inputType="select"
                clicked={openDropdown}
              />
              {openDropdown && (
                <DropDown>
                  {LANGUAGE.map((data) => (
                    <Cusor
                      key={data.id}
                      onClick={() => handleSelectDrop(data.text)}
                    >
                      {data.text}
                    </Cusor>
                  ))}
                </DropDown>
              )}
            </Box>
          </div>
          <div>
            <Label>글자 크기</Label>
            <CheckboxBox>
              {FONT_SIZE.map((item) => (
                <Checkbox
                  key={item.id}
                  label={item.label}
                  checkboxType="checkBtn"
                  checked={fontSize === item.id}
                  onChange={() => handleCheckboxChange(item)}
                  justifyContent="space-between"
                />
              ))}
            </CheckboxBox>
          </div>
        </ColContainCard>
        <ColContainCard>
          <LogOut onClick={handleLogout}>로그아웃</LogOut>
          <DeleteUser onClick={handleDeleteUser}>회원탈퇴</DeleteUser>
        </ColContainCard>
      </Background>
      <Tabbar />
    </Container>
  );
};

export default Mypage;

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  position: relative;
  padding-top: 20px;
`;

const Padding = styled.div`
  padding-left: 20px;
`;

const Background = styled.div`
  height: 100%;
  min-height: 820px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background: ${theme.colors.b80};
`;

const ContainCard = styled.div`
  display: flex;
  padding: 16px;
  border-radius: 12px;
  background: ${theme.colors.white};
  box-shadow: 0px 2px 64px 0px rgba(30, 41, 59, 0.06);
  color: ${theme.colors.b700};
  ${(props) => props.theme.fonts.body3_m};
`;

const RowContainCard = styled(ContainCard)`
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;
`;

const ColContainCard = styled(ContainCard)`
  flex-direction: column;
  gap: 24px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const RowBottom = styled(Row)`
  align-items: flex-end;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Line = styled(Row)`
  justify-content: space-between;
`;

const ChildInfo = styled.div`
  display: inline-flex;
  align-items: center;
  width: max-content;
  height: 30px;
  padding: 6px 12px;
  border-radius: 6px;
  border: 1px solid ${theme.colors.primary100};
  background: rgba(255, 135, 0, 0.15);
  color: ${theme.colors.primary500};
  text-align: center;
  ${(props) => props.theme.fonts.caption1_r};
`;

const Bold = styled.div`
  ${(props) => props.theme.fonts.body1_b}
`;

const Gray = styled.div`
  color: ${theme.colors.b400};
  ${(props) => props.theme.fonts.body3_r}
`;

const DarkGray = styled.div`
  color: ${theme.colors.b500};
  ${(props) => props.theme.fonts.body3_m};
`;

const DarkGrayCap = styled(DarkGray)`
  ${(props) => props.theme.fonts.caption1_r};
`;

const Title = styled.div`
  color: ${theme.colors.b700};
  ${(props) => props.theme.fonts.body1_b};
`;

const Label = styled.div`
  color: ${theme.colors.b700};
  ${(props) => props.theme.fonts.body3_b};
  margin-bottom: 5px;
`;

const Box = styled.div`
  position: relative;
`;

const StyledInput = styled(CustomInput)`
  position: absolute;
  top: 0;
  left: 0;
`;

const DropDown = styled.div`
  width: 100%;
  position: absolute;
  top: 44px;
  left: 0;
  padding: 16px 218px 16px 16px;
  border-radius: 10px;
  border: 1px solid ${theme.colors.b200};
  background: ${theme.colors.white};
  box-shadow: 0px 2px 64px 0px rgba(30, 41, 59, 0.06);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 28px;
  color: ${theme.colors.b500};
  ${(props) => props.theme.fonts.body3_b};
`;

const CheckboxBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(120px, 1fr));
  gap: 8px;

  @media screen and (max-width: 330px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
  }
`;

const Cusor = styled.div`
  white-space: nowrap;
  cursor: pointer;
`;

const LogOut = styled.div`
  cursor: pointer;
`;

const DeleteUser = styled(Gray)`
  cursor: pointer;
`;
