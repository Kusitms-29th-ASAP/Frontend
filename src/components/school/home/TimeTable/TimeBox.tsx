import styled from "styled-components";

interface TimeBoxProps {
  time: number;
}

const TimeBox = (props: TimeBoxProps) => {
  const { time } = props;

  let timeClassName = "";
  if (time === 0) {
    timeClassName = "zero";
  }

  return <Container className={timeClassName}>{time}</Container>;
};

export default TimeBox;

const Container = styled.div`
  display: flex;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  gap: 3px;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.b500};
  background: ${({ theme }) => theme.colors.b200};

  &.zero {
    background: ${({ theme }) => theme.colors.b100};
    color: ${({ theme }) => theme.colors.b100};
  }
`;
