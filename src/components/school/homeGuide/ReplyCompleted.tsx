import CustomInput from "@/components/common/CustomInput";
import ListBox from "@/components/common/ListBox";
import { HomeGuideReplyCompletedData } from "@/data/notifyData";
import { useState, useEffect } from "react";
import styled from "styled-components";

const weekTranslations = {
  ko: "지난주",
  en: "Last week",
  zh: "上周",
  ja: "先週",
  vi: "Tuần trước",
};

const ReplyCompleted = () => {
  const [language, setLanguage] = useState<"ko" | "en" | "zh" | "ja" | "vi">(
    "ko"
  );
  const selected = weekTranslations[language];

  useEffect(() => {
    const lang = localStorage.getItem("language") as
      | "ko"
      | "en"
      | "zh"
      | "ja"
      | "vi";
    setLanguage(lang);
  }, []);

  return (
    <>
      <Container>
        <TitleBox>
          <Title>회신이 완료된 가정통신문</Title>
          <SubTitle>과거에 제출했던 가정통신문을 확인해볼까요?</SubTitle>
        </TitleBox>
        <CustomInput inputType="select" value={selected} onChange={() => {}} />
      </Container>
      <Background>
        {HomeGuideReplyCompletedData.map((data) => (
          <ListBox
            key={data.id}
            time={data.content[language].time}
            listboxType={"content"}
            content1={data.content[language].content1}
            content2={data.content[language].content2}
            color={"mint"}
          />
        ))}
      </Background>
    </>
  );
};

export default ReplyCompleted;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 32px 20px 16px 20px;
  gap: 16px;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Title = styled.div`
  ${({ theme }) => theme.fonts.body2_b};
  color: ${({ theme }) => theme.colors.b700};
`;

const SubTitle = styled.div`
  ${({ theme }) => theme.fonts.body3_r};
  color: ${({ theme }) => theme.colors.b400};
`;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: ${({ theme }) => theme.colors.b80};
  padding: 20px;
`;
