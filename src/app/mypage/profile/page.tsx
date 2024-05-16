"use client";

import styled from "styled-components";
import Topbar from "@/components/common/Topbar";
import { useState } from "react";
import CustomInput from "@/components/common/CustomInput";
import Subtitle from "@/components/signin/Subtitle";
import { theme } from "@/styles/theme";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface Profile {
  name: string;
  phone: string;
  email: string;
}

const Profile = () => {
  const router = useRouter();

  const [profile, setProfile] = useState<Profile>({
    name: "임승현",
    phone: "010-1111-1111",
    email: "abcd@naver.com",
  });

  const [modify, setModify] = useState(false);

  const handleNameChange = (value: string) => {
    setProfile({ ...profile, name: value });
    setModify(true);
  };

  const handlePhoneChange = (value: string) => {
    setProfile({ ...profile, phone: value });
    setModify(true);
  };

  const handleModify = () => {
    setModify(false);
    /* 프로필 변경사항 저장하기 */
  };

  return (
    <>
      <Row>
        <Topbar text="프로필 수정" icon={true} link="/mypage" />
        <ModifyButton onClick={handleModify} disabled={!modify}>
          수정 완료
        </ModifyButton>
      </Row>
      <Content>
        <div>
          <Subtitle>학부모님 성함</Subtitle>
          <CustomInput
            value={profile.name}
            onChange={handleNameChange}
            placeholder="성함"
          />
        </div>
        <div>
          <Subtitle>전화번호</Subtitle>
          <CustomInput
            value={profile.phone}
            onChange={handlePhoneChange}
            placeholder="전화번호"
          />
        </div>
        <div>
          <Subtitle>이메일</Subtitle>
          <CustomInput
            value={profile.email}
            onChange={() => {}}
            placeholder="전화번호"
            disabled={true}
          />
        </div>
        <div>
          <Row>
            <Subtitle>전자서명</Subtitle>
            <PlusButton
              onClick={() => router.push("/mypage/profile/signature")}
            >
              <Image
                src="/assets/icons/ic_plus.svg"
                alt="add"
                width={20}
                height={20}
              />
              전자서명 등록하기
            </PlusButton>
          </Row>
          <SignBox>아직 등록된 전자서명이 없습니다.</SignBox>
        </div>
      </Content>
    </>
  );
};

export default Profile;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding-top: 20px;
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

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PlusButton = styled.button`
  display: flex;
  align-items: center;
  padding: 6px 12px;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid ${theme.colors.primary100};
  background: rgba(255, 135, 0, 0.15);
  color: ${theme.colors.primary700};
  ${(props) => props.theme.fonts.caption1_m};
  transition:
    color 200ms,
    background-color 200ms;
  &:active {
    border-radius: 8px;
    background: rgba(255, 135, 0, 0.1);
  }
  cursor: pointer;
`;

export const SignBox = styled.div`
  width: 100%;
  height: 168px;
  margin-top: 12px;
  margin-bottom: 32px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${theme.colors.b200};
  background: ${theme.colors.b100};
  color: ${theme.colors.b400};
  ${(props) => props.theme.fonts.body3_m};
`;
