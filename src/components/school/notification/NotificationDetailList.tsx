import ListNumber from "@/components/common/ListNumber";
import WhiteBox from "./WhiteBox";
import styled from "styled-components";

const NotificationDetailData = [
  "개인정보 동의서 수요일까지 제출",
  "수학익힘책 16p~17p 풀어오기 수학익힘책 16p~17p 풀어오기",
  "수학익힘책 16p~17p 풀어오기",
  "수학익힘책 16p~17p 풀어오기",
  "수학익힘책 16p~17p 풀어오기",
];

interface NotificationDetailProps {}

const NotificationDetailList = (props: NotificationDetailProps) => {
  return (
    <Container>
      <WhiteBox>
        {NotificationDetailData.map((data, index) => (
          <ListNumber key={index} index={index + 1} text={data} />
        ))}
      </WhiteBox>
    </Container>
  );
};

export default NotificationDetailList;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: ${({ theme }) => theme.colors.b80};
`;
