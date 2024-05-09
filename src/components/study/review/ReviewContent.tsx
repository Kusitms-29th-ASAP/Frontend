import styled from "styled-components";
import Image from "next/image";
import Tag from "../Tag";
import { useRouter } from "next/navigation";

interface ReviewContentProps {
  id: number;
  image: string;
  title: string;
  tag1: string;
  tag2: string;
}

const ReviewContent = (props: ReviewContentProps) => {
  const { id, image, title, tag1, tag2 } = props;
  const router = useRouter();

  const handleReviewClick = () => {
    router.push(`/study/${id}`);
  };

  return (
    <Container onClick={handleReviewClick}>
      <Image src={image} alt="review" width={82} height={60} />
      <ContentBox>
        <Title>{title}</Title>
        <TagBox>
          <Tag text={`#${tag1}`} tagType="primary" />
          <Tag text={`#${tag2}`} tagType="gray" />
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
