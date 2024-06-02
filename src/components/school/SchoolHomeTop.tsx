import styled from "styled-components";
import Image from "next/image";
import { useEffect, useState } from "react";
import Axios from "@/apis/axios";
import { Child } from "@/app/mypage/page";

interface SchoolHomeTopProps {
  title: string;
}

const SchoolHomeTop = (props: SchoolHomeTopProps) => {
  const { title } = props;
  const [childList, setChildList] = useState<Child[]>([]);

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
  const [schoolName, grade, classNum] = [
    child.schoolName,
    child.grade,
    child.classroomName,
  ];

  /* 자녀 전체 불러오기 */
  useEffect(() => {
    Axios.get(`/api/v1/children`)
      .then((response) => {
        const data = response.data.childList;
        setChildList(data);
      })
      .catch((error) => {});
  }, []);

  /* 선택 자녀 불러오기 */
  useEffect(() => {
    if (childList.length > 0) {
      const primaryChild = childList.find((child) => child.isPrimary);
      Axios.get(`/api/v1/children/${primaryChild?.childId}`)
        .then((response) => {
          const data = response.data;
          setChild(data);
        })
        .catch((error) => {});
    }
  }, [childList]);

  return (
    <Container>
      <TitleBox>
        <Title>{title}</Title>
        <SubTitle>
          {schoolName} | {grade}학년 {classNum}반
        </SubTitle>
      </TitleBox>
      <Image
        src="/assets/school/weekly_study.svg"
        alt="주간 학습 안내"
        width={220}
        height={200}
      />
    </Container>
  );
};

export default SchoolHomeTop;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  img {
    position: absolute;
    top: -53px;
    right: -50px;
  }
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Title = styled.div`
  ${({ theme }) => theme.fonts.heading2_b};
  color: ${({ theme }) => theme.colors.b700};
`;

const SubTitle = styled.div`
  ${({ theme }) => theme.fonts.body3_m};
  color: ${({ theme }) => theme.colors.b400};
`;
