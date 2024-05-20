import styled from "styled-components";
import ReviewContent from "./ReviewContent";
import ReviewTitle from "./ReviewTitle";
import { ReviewData } from "@/data/reviewData";

interface ReviewsProps {
  category: number;
}

const Reviews = (category: ReviewsProps) => {
  const FilterReviewData = ReviewData.filter(
    (review) => review.category === category.category
  );

  return (
    <Container>
      <ReviewTitle />
      <ReviewContentBox>
        {FilterReviewData.map((review) => (
          <ReviewContent
            key={review.id}
            id={review.id}
            image={review.image}
            title={review.title}
            tag1={review.tag1}
            tag2={review.tag2}
          />
        ))}
      </ReviewContentBox>
    </Container>
  );
};

export default Reviews;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: ${({ theme }) => theme.colors.b80};
  padding: 24px 20px;
`;

const ReviewContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
`;
