import More from "@/components/common/More";
import WhiteBox from "../WhiteBox";
import styled from "styled-components";
import ListNumber from "@/components/common/ListNumber";

const CheckList = [
  "미술활동 물통 준비 - 금요일까지",
  "방과후학교 가정통신문 회신",
  "수학 복습",
];

const NotificationCheck = () => {
  return (
    <WhiteBox>
      <TitleBox>
        <Title>오늘 알림장도 체크해요!</Title>
        <More onClick={() => {}} />
      </TitleBox>
      <List>
        {CheckList.map((item, index) => (
          <ListNumber key={index} index={index + 1} text={item} />
        ))}
      </List>
    </WhiteBox>
  );
};

export default NotificationCheck;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Title = styled.div`
  ${({ theme }) => theme.fonts.body2_b};
  color: ${({ theme }) => theme.colors.b600};
`;

const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
