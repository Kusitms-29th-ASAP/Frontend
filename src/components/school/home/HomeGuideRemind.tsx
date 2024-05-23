import styled from "styled-components";
import WhiteBox from "../WhiteBox";
import More from "@/components/common/More";
import ListBox from "@/components/common/ListBox";
import { useRouter } from "next/navigation";

const HomeGuideRemind = () => {
  const router = useRouter();
  const handleDetailClick = () => {
    router.push("/school/homeGuide");
  };

  return (
    <WhiteBox>
      <TitleBox>
        <Title>
          <span>가정통신문 제출</span> 잊지마세요!
        </Title>
        <More onClick={handleDetailClick} />
      </TitleBox>
      <ListBox
        color="orange"
        text="현장체험학습 실시 찬반의견 조사"
        time="회신 필요"
        dday={2}
      />
      <ListBox
        color="mint"
        text="양원숲 토닥토닥 상담실 운영 안내 및 보호자 동의 안내"
        time="제출 완료"
        dday={-2}
      />
    </WhiteBox>
  );
};

export default HomeGuideRemind;

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
