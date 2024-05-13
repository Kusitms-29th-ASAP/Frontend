import ListBox from "@/components/common/ListBox";
import styled from "styled-components";

const ReplyRequired = () => {
  return (
    <Container>
      <TitleBox>
        <Title>
          <span>회신이 필요한</span> 가정통신문
        </Title>
        <Subtitle>가정통신문을 확인하고 제출해주세요!</Subtitle>
      </TitleBox>
      <ListBoxContainer>
        <ListBox
          text={"현장체험학습 실시 찬반의견 조사"}
          time={"회신 필요"}
          dday={2}
          color={"orange"}
        />
        <ListBox
          text={"방과후학교 프로그램 신청서"}
          time={"제출 완료"}
          dday={5}
          color={"mint"}
        />
      </ListBoxContainer>
    </Container>
  );
};

export default ReplyRequired;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 159, 51, 0.1) 77.18%,
    rgba(255, 135, 0, 0.16) 100%
  );
  position: relative;
  gap: 16px;
`;

const Title = styled.div`
  ${({ theme }) => theme.fonts.body1_b};
  color: ${({ theme }) => theme.colors.b700};
  span {
    color: ${({ theme }) => theme.colors.primary500};
  }
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Subtitle = styled.div`
  ${({ theme }) => theme.fonts.body3_r};
  color: ${({ theme }) => theme.colors.b400};
`;

const ListBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
