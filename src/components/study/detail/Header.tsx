import styled from "styled-components";
import Tag from "../Tag";
import { useParams } from "next/navigation";
import { ReviewData } from "@/data/reviewData";

const Header = () => {
  const { id } = useParams();
  const reviews = ReviewData.find((review) => review.id === Number(id));

  return (
    <Container>
      {reviews && (
        <>
          <TagBox>
            <Tag text={reviews.tag1} tagType="primary" />
            <Tag text={reviews.tag2} tagType="gray" />
          </TagBox>
          <Title>{reviews.title}</Title>
          <Description>
            {reviews.date} | {reviews.author}
          </Description>
        </>
      )}
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
`;

const TagBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Title = styled.div`
  margin: 6px 0 12px 0;
  ${({ theme }) => theme.fonts.heading2_b};
  color: ${({ theme }) => theme.colors.b800};
`;

const Description = styled.div`
  ${({ theme }) => theme.fonts.body3_m};
  color: ${({ theme }) => theme.colors.b400};
`;
