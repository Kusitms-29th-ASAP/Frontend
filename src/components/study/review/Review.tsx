import styled from "styled-components";
import ReviewContent from "./ReviewContnet";
import ReviewTitle from "./ReviewTitle";
import { Reviews } from "@/data/reviewData";

const Review = () => {
  return (
    <Container>
      <ReviewTitle />
      <ReviewContentBox>
        {Reviews.map((review) => (
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

export default Review;

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
