import { useState } from "react";
import styled from "styled-components";

const ReviewTitle = () => {
  const [month, setMonth] = useState(6);
  const [week, setWeek] = useState(2);

  return (
    <ReviewText>
      <span>
        {month}월 {week}주차{" "}
      </span>
      배운 내용 복습해봐요!
    </ReviewText>
  );
};

export default ReviewTitle;

const ReviewText = styled.div`
  ${({ theme }) => theme.fonts.body2_b};
  color: ${({ theme }) => theme.colors.b700};

  span {
    color: ${({ theme }) => theme.colors.primary700};
  }
`;
