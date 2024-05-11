import { theme } from "@/styles/theme";
import styled from "styled-components";
import SummaryCard from "./SummaryCard";
import { SummaryCardProps } from "@/data/newsData";

const Summary = ({ dummyData }: { dummyData: SummaryCardProps[] }) => {
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
            date={data.date}
            look={data.look}
            keyword={data.keyword}
            sentence={data.sentence}
            summaryId={data.summaryId}
          />
        ))}
      </Content>
    </Container>
  );
};

export default Summary;

const Container = styled.div`
  width: 100%;
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
