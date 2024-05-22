import ListNumber from "@/components/common/ListNumber";
import { theme } from "@/styles/theme";
import Image from "next/image";
import { useRouter } from "next/navigation";
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

const SummaryCard = (props: AnnouncementsProps) => {
  const {
    type = "school",
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

  const handleCardClick = (announcementId: number) => {
    router.push(`/news/${type}/${announcementId}`);
  };

  return (
    <StyledCard
      className={summaryType}
      onClick={
        summaryType === "simple" && announcementId
          ? () => handleCardClick(announcementId)
          : undefined
      }
    >
      <Top>
        <Label>
          {isNew && <New>NEW</New>}
          <Category>{category}</Category>
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
            <StyledListNumber key={index} index={index + 1} text={data} />
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
  background: rgba(255, 135, 0, 0.15);
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
