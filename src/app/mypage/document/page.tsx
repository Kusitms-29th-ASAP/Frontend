"use client";

import CustomInput from "@/components/common/CustomInput";
import Topbar from "@/components/common/Topbar";
import SelectionPopup from "@/components/signin/SelectionPopup";
import { theme } from "@/styles/theme";
import { useState } from "react";
import styled from "styled-components";

const typeData = ["유형 전체", "결석사유서", "체험학습 신청서"];

const Document = () => {
  const [grade, setGrade] = useState("");
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleTypeSelectClick = () => {
    setOpenDropdown(!openDropdown);
  };

  const handleSelectGrade = (selectedGrade: string) => {
    setGrade(selectedGrade);
    setOpenDropdown(false); // 선택 후 팝업 닫기
  };

  return (
    <>
      <Top>
        <Topbar text="서류 제출 내역" icon={true} />
        <CustomInput
          value={grade}
          onClick={handleTypeSelectClick}
          onChange={() => {}}
          placeholder="유형전체"
          inputType="select"
        />
        {openDropdown && (
          <SelectionPopup
            onClose={handleTypeSelectClick}
            onSelect={handleSelectGrade}
            selectionList={typeData}
          />
        )}
      </Top>
      <Background>안녕</Background>
    </>
  );
};

export default Document;

const Top = styled.div`
  padding: 20px;
`;

const Background = styled.div`
  height: 100%;
  padding: 20px;
  background: ${theme.colors.b80};
`;
