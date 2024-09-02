import styled from "styled-components";
import WhiteBox from "../WhiteBox";
import More from "@/components/common/More";
import ListBox from "@/components/common/ListBox";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const textContent = {
  ko: {
    listBox1: {
      text: "현장체험학습 실시 찬반의견 조사",
      time: "회신 필요",
    },
    listBox2: {
      text: "양원숲 토닥토닥 상담실 운영 안내 및 보호자 동의 안내",
      time: "제출 완료",
    },
  },
  en: {
    listBox1: {
      text: "Field Trip Participation Survey",
      time: "Reply-needed",
    },
    listBox2: {
      text: "After-School Program Form",
      time: "Submitted",
    },
  },
  zh: {
    listBox1: {
      text: "郊游参与调查",
      time: "需回复",
    },
    listBox2: {
      text: "课后活动申请表",
      time: "提交完成",
    },
  },
  ja: {
    listBox1: {
      text: "遠足参加調査",
      time: "回答必要",
    },
    listBox2: {
      text: "放課後プログラム申込書",
      time: "提出済み",
    },
  },
  vi: {
    listBox1: {
      text: "Khảo sát tham gia dã ngoại",
      time: "Cần-hồi đáp",
    },
    listBox2: {
      text: "Đăng ký ngoại khóa",
      time: "Đã nộp",
    },
  },
  pi: {
    listBox1: {
      text: "Suri sa paglahok sa picnic",
      time: "Walang-tugon",
    },
    listBox2: {
      text: "Form para sa after-school",
      time: "Nai-submit na",
    },
  },
};

const HomeGuideRemind = () => {
  const router = useRouter();
  const handleDetailClick = () => {
    router.push("/school/homeGuide");
  };
  const [language, setLanguage] = useState<string | null>("ko");

  useEffect(() => {
    setLanguage(localStorage.getItem("language") || "ko");
  }, []);

  const currentText =
    textContent[language as keyof typeof textContent] || textContent.ko;

  return (
    <WhiteBox>
      <TitleBox>
        <Title>
          <span>가정통신문 제출</span> 잊지마세요!
        </Title>
        <More align="center" onClick={handleDetailClick} />
      </TitleBox>
      <ListBox
        color="orange"
        text={currentText.listBox1.text}
        time={currentText.listBox1.time}
        dday={1}
      />
      <ListBox
        color="mint"
        text={currentText.listBox2.text}
        time={currentText.listBox2.time}
        dday={-3}
      />
    </WhiteBox>
  );
};

export default HomeGuideRemind;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 360px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  ${({ theme }) => theme.fonts.body2_b};
  color: ${({ theme }) => theme.colors.b700};

  span {
    color: ${({ theme }) => theme.colors.primary700};
  }
`;
