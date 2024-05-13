import styled from "styled-components";
import WhiteBox from "../WhiteBox";
import More from "@/components/common/More";
import ListBox from "@/components/common/ListBox";

const HomeGiudeRemind = () => {
  return (
    <WhiteBox>
      <TitleBox>
        <Title>
          <span>가정통신문 제출</span> 잊지마세요!
        </Title>
        <More onClick={() => {}} />
      </TitleBox>
      <ListBox
        color="orange"
        type="none"
        text="방과후학교 가정통신문 회신"
        time="회신 필요"
        dday={2}
      />
      <ListBox
        color="mint"
        type="none"
        text="방과후학교 프로그램 신청서"
        time="제출 완료"
        dday={5}
      />
    </WhiteBox>
  );
};

export default HomeGiudeRemind;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Title = styled.div`
  ${({ theme }) => theme.fonts.body2_b};
  color: ${({ theme }) => theme.colors.b700};

  span {
    color: ${({ theme }) => theme.colors.primary700};
  }
`;
