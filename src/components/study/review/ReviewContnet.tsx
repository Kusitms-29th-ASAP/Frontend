import styled from "styled-components";
import Image from "next/image";

interface ReviewContentProps {
  image: string;
  title: string;
  tag1: string;
  tag2: string;
}

const ReviewContent = (props: ReviewContentProps) => {
  const { image, title, tag1, tag2 } = props;

  return (
    <Container>
      <Image src={image} alt="review" width={82} height={60} />
      <ContentBox>
        <Title>{title}</Title>
        <TagBox>
          <Tag1>#{tag1}</Tag1>
          <Tag2>#{tag2}</Tag2>
        </TagBox>
      </ContentBox>
      <Image
        src={"/assets/common/right_arrow.svg"}
        alt="arrow"
        width={20}
        height={20}
      />
    </Container>
  );
};

export default ReviewContent;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.b100};
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 2px 64px 0px rgba(30, 41, 59, 0.06);
`;

const Title = styled.div`
  ${({ theme }) => theme.fonts.body3_m};
  color: ${({ theme }) => theme.colors.b600};
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 6px;
  width: 100%;
`;

const TagBox = styled.div`
  display: flex;
  gap: 4px;
`;

const Tag = styled.div`
  ${({ theme }) => theme.fonts.body3_r};
  padding: 3px 8px;
  border-radius: 8px;
`;

const Tag1 = styled(Tag)`
  color: ${({ theme }) => theme.colors.primary500};
  background: rgba(255, 135, 0, 0.15);
`;

const Tag2 = styled(Tag)`
  color: ${({ theme }) => theme.colors.b400};
  background: ${({ theme }) => theme.colors.b100};
  border: 1px solid var(--b-200, #e2e8f0);
`;
