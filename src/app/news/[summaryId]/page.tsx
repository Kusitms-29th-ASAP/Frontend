"use client";

import { summaryData, summaryEduData } from "@/data/newsData";
import SummaryCard from "@/components/news/SummaryCard";
import { useParams, useRouter } from "next/navigation";
import Tobbar from "@/components/common/Tobbar";
import styled from "styled-components";
import { theme } from "@/styles/theme";
import Image from "next/image";

const SummaryDetail = () => {
  const router = useRouter();
  const params = useParams();
  const summaryId = +params.summaryId;
  const allSummaries = [...summaryData, ...summaryEduData];
  const summary = allSummaries.find(
    (summary) => summary.summaryId === summaryId
  );

  const handleSend = () => {
    router.push("/"); // 학교생활 > 가정통신문 더보기 > 회신
  };
  return (
    <>
      {summary ? (
        <div>
          <Padding>
            <Top>
              <Tobbar text="가정통신문" />
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
            <SummaryCard summaryType="detail" {...summary} />
          </Padding>
          <Divider />
          <DocsImage>
            가정통신문 원본
            <StyledImage />
          </DocsImage>
        </div>
      ) : (
        <div>Not found Data</div>
      )}
    </>
  );
};

export default SummaryDetail;

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
  padding: 20px;
  color: ${theme.colors.b700};
  ${(props) => props.theme.fonts.body2_b};
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StyledImage = styled.div`
  width: 100%;
  height: 244px;
  background: ${theme.colors.b100};
`;
