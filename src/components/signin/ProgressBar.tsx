import styled from "styled-components";

interface ProgressBarProps {
  rate: number;
}

const ProgressBar = ({ rate }: ProgressBarProps) => {
  return (
    <ProgressLayout>
      <Progress rate={rate} />
    </ProgressLayout>
  );
};

export default ProgressBar;

const ProgressLayout = styled.div`
  width: 100%;
  height: 4px;
  flex-shrink: 0;
  background: ${({ theme }) => theme.colors.b100};
  border-radius: 50px;
  margin-top: 20px;
`;

const Progress = styled.div<ProgressBarProps>`
  width: ${(props) => props.rate}%;
  height: 100%;
  border-radius: 50px;
  background: ${({ theme }) => theme.colors.primary500};
`;
