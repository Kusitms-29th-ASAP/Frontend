import styled from "styled-components";
import WhiteBox from "../WhiteBox";
import More from "@/components/common/More";

const ParentReference = () => {
  return (
    <WhiteBox>
      <TitleBox>
        <Title>자주 찾는 학부모 자료</Title>
      </TitleBox>
      <MoreBox>
        <More text="결석 사유서" moreType="text" onClick={() => {}} />
        <More text="체험학습 신청서" moreType="text" onClick={() => {}} />
      </MoreBox>
    </WhiteBox>
  );
};

export default ParentReference;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 6px;
`;

const Title = styled.div`
  ${({ theme }) => theme.fonts.body2_b};
  color: ${({ theme }) => theme.colors.b600};
`;

const MoreBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
