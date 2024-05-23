"use client";

import CustomInput from "@/components/common/CustomInput";
import ListBox from "@/components/common/ListBox";
import Topbar from "@/components/common/Topbar";
import DocsPopup from "@/components/mypage/DocsPopup";
import { Docs, docsData } from "@/data/mypageData";
import { theme } from "@/styles/theme";
import { useState } from "react";
import styled from "styled-components";

const typeData = ["유형 전체", "결석사유서", "체험학습 신청서"];

const Document = () => {
  const [type, setType] = useState("유형 전체");
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selectedData, setSelectedData] = useState<Docs | null>(null);
  const [openPopup, setOpenPopup] = useState(false);

  const handleTypeSelectClick = () => {
    setOpenDropdown(!openDropdown);
  };

  const handleSelectDrop = (selectedDrop: string) => {
    setType(selectedDrop);
    setOpenDropdown(false);
  };

  const handleListBoxClick = (data: Docs) => {
    setSelectedData(data);
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  return (
    <>
      <Top>
        <Topbar text="서류 제출 내역" icon={true} />
        <Box>
          <StyledInput
            value={type}
            onClick={handleTypeSelectClick}
            onChange={() => {}}
            placeholder="유형전체"
            inputType="select"
            clicked={openDropdown}
          />
          {openDropdown && (
            <DropDown>
              {typeData.map((data, index) => (
                <Cusor key={index} onClick={() => handleSelectDrop(data)}>
                  {data}
                </Cusor>
              ))}
            </DropDown>
          )}
        </Box>
      </Top>
      <Background>
        {docsData.map((data) => (
          <ListBox
            key={data.id}
            time={"승인 요청"}
            listboxType={"content"}
            content1={data.content1}
            content2={data.content2}
            date={data.date}
            color={"mint"}
            onClick={() => handleListBoxClick(data)}
          />
        ))}
      </Background>
      {openPopup && selectedData && (
        <DocsPopup onClose={handleClosePopup} data={selectedData} />
      )}
    </>
  );
};

export default Document;

const Top = styled.div`
  padding: 20px;
`;

const Background = styled.div`
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: ${theme.colors.b80};
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
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 28px;
  color: ${theme.colors.b500};
  ${(props) => props.theme.fonts.body3_b};
`;

const Cusor = styled.div`
  cursor: pointer;
`;
