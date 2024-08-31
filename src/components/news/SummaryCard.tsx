import ListNumber from "@/components/common/ListNumber";
import { newText } from "@/data/newsData";
import { theme } from "@/styles/theme";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styled from "styled-components";

interface Line {
  keywords: string[];
  summaries: string[];
}

interface AnnouncementsProps {
  type?: "school" | "eduOffice";
  summaryType?: "simple" | "detail";
  isNew: boolean;
  category: string;
  title: string;
  uploadDate: string;
  imageUrls?: string[];
  highlight?: Line;
  summary?: string[];
  announcementId?: number;
}

interface CategoryMap {
  [key: string]: {
    ko: string;
    en: string;
    zh: string;
    ja: string;
    vi: string;
    pi: string;
  };
}

const categoryMap: CategoryMap = {
  NONE: {
    ko: "미선택",
    en: "None",
    zh: "到明天为止",
    ja: "明日までに",
    vi: "Đến-ngày Mai",
    pi: "Hanggang-Bukas",
  },
  MENU: {
    ko: "급식",
    en: "Lunch",
    zh: "餐",
    ja: "給食",
    vi: "Ăn trưa",
    pi: "Kain",
  },
  INTERNAL_EXTERNAL_PROGRAM: {
    ko: "교내외 프로그램",
    en: "Program",
    zh: "程序",
    ja: "プログラム",
    vi: "Chương trình",
    pi: "Programa",
  },
  SCHOOL_MANAGEMENT: {
    ko: "학교 운영",
    en: "Operation",
    zh: "运营",
    ja: "運営",
    vi: "Vận hành",
    pi: "Pamamahala",
  },
  HEALTH: {
    ko: "보건",
    en: "None",
    zh: "健康",
    ja: "健康",
    vi: "Sức khỏe",
    pi: "Kalusugan",
  },
  SCHOOL_SCHEDULE: {
    ko: "학교 일정",
    en: "Schedule",
    zh: "日程",
    ja: "予定",
    vi: "Lịch",
    pi: "Iskedyul",
  },
  EDUCATION_BENEFIT: {
    ko: "교육 혜택",
    en: "Benefit",
    zh: "优惠",
    ja: "特典",
    vi: "Lợi ích",
    pi: "Benepisyo",
  },
  LIFE_SAFE: {
    ko: "생활/안전",
    en: "Safety",
    zh: "安全",
    ja: "安全",
    vi: "An toàn",
    pi: "Ligtas",
  },
  ETC: {
    ko: "기타",
    en: "ETC",
    zh: "等",
    ja: "等",
    vi: "Vân vân",
    pi: "Atbp",
  },
};

const SummaryCard = (props: AnnouncementsProps) => {
  const {
    type,
    summaryType = "simple",
    isNew,
    category,
    title,
    uploadDate,
    imageUrls,
    highlight,
    summary,
    announcementId,
  } = props;

  const router = useRouter();
  const [language, setLanguage] = useState<string>("ko");

  useEffect(() => {
    setLanguage(localStorage.getItem("language") || "ko");
  }, []);

  const handleCardClick = (type: string, announcementId: number) => {
    router.push(`/news/${type}/${announcementId}`);
  };

  return (
    <StyledCard
      className={summaryType}
      onClick={
        summaryType === "simple" && type && announcementId
          ? () => handleCardClick(type, announcementId)
          : undefined
      }
    >
      <Top>
        <Label>
          {isNew && <New>{newText[language as keyof typeof newText]}</New>}
          {category !== "NONE" && (
            <Category>
              {
                categoryMap[category][
                  language as keyof (typeof categoryMap)[keyof CategoryMap]
                ]
              }
            </Category>
          )}
        </Label>
      </Top>
      <Title className={summaryType}>{title}</Title>
      <Date>{uploadDate}</Date>
      {summaryType === "detail" && (
        <Detail>
          <Row>
            <Image
              src="/assets/news/logo.svg"
              width={25.2}
              height={19.5}
              alt="look"
            />
            가정통신문, 핵심만 콕콕
          </Row>
          <>
            <Row>
              {highlight?.keywords.map((data, index) => (
                <StyledKeyword key={index}>{data}</StyledKeyword>
              ))}
            </Row>
          </>
        </Detail>
      )}
      <Sentence>
        {summaryType === "simple" &&
          summary?.map((data, index) => (
            <StyledListNumber key={index} index={index + 1} text={data} />
          ))}

        {summaryType === "detail" &&
          highlight?.summaries.map((data, index) => (
            <Background key={index}>
              <StyledListNumber key={index} index={index + 1} text={data} />
            </Background>
          ))}
      </Sentence>
    </StyledCard>
  );
};

export default SummaryCard;

const StyledCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 10px;
  background: ${theme.colors.white};
  cursor: pointer;

  &.simple {
    padding: 16px;
    box-shadow: 0px 2px 64px 0px rgba(30, 41, 59, 0.06);
  }
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  margin-bottom: 4px;
`;

const New = styled.div`
  height: 23px;
  display: flex;
  padding: 3px 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: ${theme.colors.primary500};
  color: ${theme.colors.white};
  ${(props) => props.theme.fonts.caption1_b};
`;

const Category = styled.div`
  height: 23px;
  display: flex;
  padding: 3px 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: rgba(5, 206, 194, 0.1);
  color: ${theme.colors.sub_mint};
  ${(props) => props.theme.fonts.caption1_m};
`;

const Look = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  color: ${theme.colors.b400};
  text-align: right;
  ${(props) => props.theme.fonts.caption2_b};
`;

const Detail = styled.div`
  margin-top: 28px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  word-break: keep-all;
  gap: 8px;
  margin-bottom: 6px;
  color: ${theme.colors.primary500};
  ${(props) => props.theme.fonts.body2_b};
`;

const Title = styled.div`
  width: 100%;
  color: ${theme.colors.b700};
  ${(props) => props.theme.fonts.body2_b};

  &.detail {
    color: ${theme.colors.b800};
    ${(props) => props.theme.fonts.heading2_b};
  }
`;

const Date = styled.div`
  color: ${theme.colors.b400};
  ${(props) => props.theme.fonts.body3_m};
`;

const StyledKeyword = styled.div`
  display: flex;
  height: 30px;
  padding: 6px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  background: #ffedd9;
  color: ${theme.colors.primary500};
  text-align: center;
  ${(props) => props.theme.fonts.caption1_b};
`;

const Sentence = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 20px;
`;

const StyledListNumber = styled(ListNumber)`
  align-items: flex-start;
  color: ${theme.colors.b600};
  ${(props) => props.theme.fonts.caption3_r};

  &.detail {
    padding: 8px 12px;
    border-radius: 10px;
    background: ${theme.colors.b100};
  }
`;

const Background = styled.div`
  padding: 8px 12px;
  border-radius: 10px;
  background: ${theme.colors.b100};
`;
