import styled from "styled-components";

interface TimeBoxProps {
  time: number;
}

const TimeBox = (props: TimeBoxProps) => {
  const { time } = props;

  return <Container>{time}</Container>;
};

export default TimeBox;

const Container = styled.div`
  display: flex;
  width: 30px;
  height: 30px;
  padding: 6px 0px;
  justify-content: center;
  align-items: center;
  gap: 3px;

  border-radius: 6px;
  background: ${({ theme }) => theme.colors.b200};

  color: ${({ theme }) => theme.colors.b500};
  background: ${({ theme }) => theme.colors.b200};
`;
