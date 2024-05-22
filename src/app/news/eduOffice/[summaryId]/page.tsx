"use client";

import SummaryCard from "@/components/news/SummaryCard";
import { useParams, useRouter } from "next/navigation";
import Topbar from "@/components/common/Topbar";
import styled from "styled-components";
import { theme } from "@/styles/theme";
import Image from "next/image";
import { useEffect, useState } from "react";
import Axios from "@/apis/axios";

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

const SummaryDetail = () => {
  const router = useRouter();
  const params = useParams();
  const summaryId = +params.summaryId;

  const [summaryData, setSummaryData] = useState<AnnouncementsProps>();

  useEffect(() => {
    Axios.get(`/api/v1/announcements/education-offices/${summaryId}`)
      .then((response) => {
        const summaryData: AnnouncementsProps = response.data;
        setSummaryData(summaryData);
        console.log("교육청 상세목록:", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSend = () => {
    router.push("/school/homeGuide");
  };

  return (
    <Layout>
      {summaryData ? (
        <div>
          <Padding>
            <Top>
              <Topbar text="가정통신문" />
              <SendBtn onClick={handleSend}>
                가정통신문 회신하기
                <Image
                  src="/assets/news/send.svg"
                  width={20}
                  height={20}
                  alt="send"
                />
              </SendBtn>
            </Top>
            {summaryData && (
              <SummaryCard
                type="eduOffice"
                summaryType="detail"
                isNew={summaryData.isNew}
                category={summaryData.category}
                title={summaryData.title}
                uploadDate={summaryData.uploadDate}
                imageUrls={summaryData.imageUrls}
                highlight={summaryData.highlight}
                summary={summaryData.summary}
                announcementId={summaryData.announcementId}
              />
            )}
          </Padding>
          <Divider />
          <DocsImage>
            가정통신문 원본
            {summaryData.imageUrls &&
              summaryData.imageUrls.map((data, index) => (
                <StyledImage
                  key={index}
                  src={data}
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt="가정통신문"
                />
              ))}
          </DocsImage>
        </div>
      ) : (
        <div>Not found Data</div>
      )}
    </Layout>
  );
};

export default SummaryDetail;

const Layout = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Padding = styled.div`
  padding: 20px;
  background: ${theme.colors.white};
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SendBtn = styled.div`
  color: ${theme.colors.primary500};
  ${(props) => props.theme.fonts.caption1_m};
  display: flex;
  flex-direction: row;
  gap: 8px;
  cursor: pointer;
`;

const Divider = styled.div`
  width: 100%;
  height: 12px;
  background: ${theme.colors.b100};
`;

const DocsImage = styled.div`
  width: 100%;
  padding: 20px;
  color: ${theme.colors.b700};
  ${(props) => props.theme.fonts.body2_b};
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: hidden;
`;

const StyledImage = styled(Image)`
  width: 440px;
  height: 720px;
  background: ${theme.colors.b100};
`;
