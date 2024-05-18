"use client";

import Button from "@/components/common/Button";
import Checkbox from "@/components/common/Checkbox";
import Topbar from "@/components/common/Topbar";
import { useDeleteUser } from "@/hooks/auth/useDeleteUser";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styled from "styled-components";

const CONTENT = "스쿨포인트를 사용하려면 \n약관 동의가 필요해요";

const Terms = () => {
  const router = useRouter();
  const [isAllAgreed, setIsAllAgreed] = useState(false);
  const [isServiceAgreed, setIsServiceAgreed] = useState(false);
  const [isPrivacyAgreed, setIsPrivacyAgreed] = useState(false);
  const [isMarketingAgreed, setIsMarketingAgreed] = useState(false);

  useEffect(() => {
    if (isServiceAgreed && isPrivacyAgreed && isMarketingAgreed) {
      setIsAllAgreed(true);
    } else {
      setIsAllAgreed(false);
    }
  }, [isServiceAgreed, isPrivacyAgreed, isMarketingAgreed]);

  const handleAllAgreeChange = (isChecked: boolean) => {
    setIsAllAgreed(isChecked);
    setIsServiceAgreed(isChecked);
    setIsPrivacyAgreed(isChecked);
    setIsMarketingAgreed(isChecked);
  };

  const handleNextButtonClick = () => {
    router.push("/signin/process1");
  };

  // const userDeleteMutation = useDeleteUser();
  const handleLogoutClick = () => {
    // userDeleteMutation.mutate();
  };

  return (
    <Container>
      <Topbar text="회원가입" />
      <ContentBox>{CONTENT}</ContentBox>

      {/* <button onClick={handleLogoutClick}>로그아웃</button> */}

      <AgreeBox>
        <Checkbox
          label="약관 전체 동의"
          checkboxType="checkBtn"
          text="선택사항 포함"
          checked={isAllAgreed}
          onChange={(e) => handleAllAgreeChange(e.target.checked)}
          color="black"
        />
        <Checkbox
          label="서비스 이용약관"
          checkboxType="checkArrow"
          essential={true}
          text="필수"
          checked={isServiceAgreed}
          onChange={(e) => setIsServiceAgreed(e.target.checked)}
          color="primary"
        />
        <Checkbox
          label="개인정보 수집 및 이용동의"
          checkboxType="checkArrow"
          essential={true}
          text="필수"
          checked={isPrivacyAgreed}
          onChange={(e) => setIsPrivacyAgreed(e.target.checked)}
          color="primary"
        />
        <Checkbox
          label="마케팅 수신 동의"
          checkboxType="checkArrow"
          text="선택"
          checked={isMarketingAgreed}
          onChange={(e) => setIsMarketingAgreed(e.target.checked)}
          color="primary"
        />
      </AgreeBox>

      <Button
        text="다음"
        onClick={handleNextButtonClick}
        disabled={!isServiceAgreed || !isPrivacyAgreed}
      />
    </Container>
  );
};

export default Terms;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  min-height: 100%;
  padding: 20px;
`;

const ContentBox = styled.div`
  height: 100%;
  ${({ theme }) => theme.fonts.heading2_b};
  color: ${({ theme }) => theme.colors.b700};
  margin-top: 40px;
`;

const AgreeBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  margin: 65px 0;
`;
