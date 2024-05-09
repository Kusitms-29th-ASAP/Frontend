import styled from "styled-components";
import ReviewContent from "./ReviewContent";
import ReviewTitle from "./ReviewTitle";
import { ReviewData } from "@/data/reviewData";

const Reviews = () => {
  return (
    <Container>
      <ReviewTitle />
      <ReviewContentBox>
        {ReviewData.map((review) => (
          <ReviewContent
            key={review.id}
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
