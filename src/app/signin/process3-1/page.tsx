"use client";

import Button from "@/components/common/Button";
import Input from "@/components/common/CustomInput";
import Topbar from "@/components/common/Topbar";
import ProgressBar from "@/components/signin/ProgressBar";
import SelectionPopup from "@/components/signin/SelectionPopup";
import Subtitle from "@/components/signin/Subtitle";
import { GradeData, classNumData } from "@/data/studentData";
import { setUser } from "@/redux/slices/userSlice";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const GRADE = ["FIRST", "SECOND", "SIXTH", "THIRD", "FOURTH", "FIFTH"];

const Process3_1 = () => {
  const studentName = useSelector(
    (state: RootState) => state.user.children[0].name
  );
  const [schoolParentName, setSchoolParentName] = useState("김부모");
  const [openGradePopup, setOpenGradePopup] = useState(false);
  const [openclassNumPopup, setOpenclassNumPopup] = useState(false);

  const [grade, setGrade] = useState<null | number>(null);
  const [classNum, setClassNum] = useState<null | number>(null);

  const name = studentName.substr(1, 3);
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  const handleNextButtonClick = () => {
    dispatch(
      setUser({
        ...user,
        children: [
          {
            name: studentName,
            elementSchoolId: 1,
            elementSchoolGrade: GRADE[grade!! - 1],
            elementSchoolClass: classNum,
          },
        ],
      })
    );
    router.push("/signin/process4");
  };

  const handleGradeSelectClick = () => {
    setOpenGradePopup(true);
  };
  const handleclassNumSelectClick = () => {
    setOpenclassNumPopup(true);
  };
  const handleGradeSelectClose = () => {
    setOpenGradePopup(false);
  };
  const handleclassNumSelectClose = () => {
    setOpenclassNumPopup(false);
  };

  const handleSelectGrade = (selectedGrade: number) => {
    setGrade(selectedGrade);
    setOpenGradePopup(false);
  };

  const handleSelectclassNum = (selectedclassNum: number) => {
    setClassNum(selectedclassNum);
    setOpenclassNumPopup(false);
  };

  return (
    <Container>
      <Topbar text="회원가입" />
      <ProgressBar rate={80} />
      <Context>
        반가워요! {name} 학생 학부모이신 {schoolParentName}님!
      </Context>
      <Title>
        {name} 학생의 <br /> 학급정보를 등록해주세요.
      </Title>
      <ContentBox>
        <Subtitle>자녀의 학년과 반을 입력해주세요.</Subtitle>
        <InputBox>
          <Input
            value={grade && `${grade}학년`}
            onClick={handleGradeSelectClick}
            onChange={() => {}}
            placeholder="학년"
            inputType="select"
          />
          <Input
            value={classNum && `${classNum}반`}
            onClick={handleclassNumSelectClick}
            onChange={() => {}}
            placeholder="반"
            inputType="select"
          />
        </InputBox>
        {openGradePopup && (
          <SelectionPopup
            onClose={handleGradeSelectClose}
            onSelect={handleSelectGrade}
            selectionList={GradeData}
          />
        )}
        {openclassNumPopup && (
          <SelectionPopup
            onClose={handleclassNumSelectClose}
            onSelect={handleSelectclassNum}
            selectionList={classNumData}
          />
        )}
      </ContentBox>
      <Button
        text="다음"
        onClick={handleNextButtonClick}
        disabled={grade === null || classNum === null}
      />
    </Container>
  );
};

export default Process3_1;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  min-height: 100%;
  padding: 20px;
`;

const Title = styled.div`
  ${({ theme }) => theme.fonts.heading2_b};
  color: ${({ theme }) => theme.colors.b700};
  margin: 12px 0 60px 0;
`;

const Context = styled.div`
  ${({ theme }) => theme.fonts.body3_m};
  color: ${({ theme }) => theme.colors.b400};
  margin-top: 12px;
`;

const ContentBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const InputBox = styled.div`
  display: flex;
  gap: 12px;
`;
