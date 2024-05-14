import styled from "styled-components";
import Image from "next/image";

const WeeklyStudyGuide = () => {
  const [schoolName, grade, classNum] = ["신용산", 3, 1];

  return (
    <Container>
      <TitleBox>
        <Title>주간 학습 안내</Title>
        <SubTitle>
          {schoolName}초등학교 | {grade}학년 {classNum}반
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

export default WeeklyStudyGuide;

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
