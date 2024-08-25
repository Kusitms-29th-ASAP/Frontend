import ListBox from "@/components/common/ListBox";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { HomeGuideReplyRequiredData } from "@/data/notifyData";

const ReplyRequired = () => {
  const router = useRouter();
  const [language, setLanguage] = useState<string | null>("ko");

  useEffect(() => {
    setLanguage(localStorage.getItem("language") || "ko");
  }, []);

  const handleHomeGuideClick = () => {
    router.push("/school/homeGuide/reply");
  };

  const currentText =
    HomeGuideReplyRequiredData[0][
      language as keyof (typeof HomeGuideReplyRequiredData)[0]
    ] || HomeGuideReplyRequiredData[0].ko;

  return (
    <Container>
      <TitleBox>
        <Title>
          <span>회신이 필요한</span> 가정통신문
        </Title>
        <Subtitle>가정통신문을 확인하고 제출해주세요!</Subtitle>
      </TitleBox>
      <ListBoxContainer>
        <ListBox
          text={currentText.listBox1.text}
          time={currentText.listBox1.time}
          dday={2}
          color={"orange"}
          onClick={handleHomeGuideClick}
        />
        <ListBox
          text={currentText.listBox2.text}
          time={currentText.listBox2.time}
          dday={5}
          color={"mint"}
          onClick={handleHomeGuideClick}
        />
      </ListBoxContainer>
    </Container>
  );
};

export default ReplyRequired;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 159, 51, 0.1) 77.18%,
    rgba(255, 135, 0, 0.16) 100%
  );
  position: relative;
  gap: 16px;
`;

const Title = styled.div`
  ${({ theme }) => theme.fonts.body1_b};
  color: ${({ theme }) => theme.colors.b700};
  span {
    color: ${({ theme }) => theme.colors.primary500};
  }
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Subtitle = styled.div`
  ${({ theme }) => theme.fonts.body3_r};
  color: ${({ theme }) => theme.colors.b400};
`;

const ListBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
