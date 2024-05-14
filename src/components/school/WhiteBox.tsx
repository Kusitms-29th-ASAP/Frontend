import styled from "styled-components";

interface WhiteBoxProps {
  children: React.ReactNode;
}

const WhiteBox = (props: WhiteBoxProps) => {
  const { children } = props;

  return <Container>{children}</Container>;
};

export default WhiteBox;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  padding: 18px 20px;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;
