import styled from "styled-components";

interface TopBoxProps {
  isToday: boolean;
}

const TopBox = (props: TopBoxProps) => {
  const { isToday } = props;

  return (
    <Container>
      {isToday && <New>NEW</New>}
      <Days>{isToday ? "오늘" : "어제"}의 알림장</Days>
    </Container>
  );
};

export default TopBox;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const TextBox = styled.div`
  ${({ theme }) => theme.fonts.caption1_m};
  border-radius: 8px;
  padding: 3px 8px;
`;

const New = styled(TextBox)`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.primary500};
`;

const Days = styled(TextBox)`
  color: ${({ theme }) => theme.colors.sub_mint};
  background: rgba(5, 206, 194, 0.1);
`;
