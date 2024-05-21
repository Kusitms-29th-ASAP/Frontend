import { theme } from "@/styles/theme";
import styled from "styled-components";
import SummaryCard from "./SummaryCard";

export type summaryType = "simple" | "detail";

interface Line {
  keywords: string[];
  summaries: string[];
}

interface AnnouncementsProps {
  summaryType?: string;
  isNew: boolean;
  category: string;
  title: string;
  uploadDate: string;
  imageUrls?: string[];
  highlight?: Line;
  summary?: string[];
  announcementId?: number;
}

const Summary = ({ dummyData }: { dummyData: AnnouncementsProps[] }) => {
  return (
    <Container>
      <Content>
        <Title>가정통신문, 세 문장 요약해드려요</Title>
        {dummyData.map((data, index) => (
          <SummaryCard
            key={index}
            isNew={data.isNew}
            category={data.category}
            title={data.title}
            uploadDate={data.uploadDate}
            summary={data.summary}
            highlight={data.highlight}
            imageUrls={data.imageUrls}
            announcementId={data.announcementId}
          />
        ))}
      </Content>
    </Container>
  );
};

export default Summary;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 26px 20px 29px 20px;
  gap: 31px;
  background: linear-gradient(180deg, #fff 0%, #f3f6fa 20.33%, #f1f5f9 100%);
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Title = styled.div`
  color: ${theme.colors.b700};
  ${(props) => props.theme.fonts.heading2_b};
  letter-spacing: -0.4px;
`;
