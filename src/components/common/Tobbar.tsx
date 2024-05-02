import Image from "next/image";
import styled from "styled-components";

export interface TobbarProps {
  text: string;
}

const Tobbar = (props: TobbarProps) => {
  const { text } = props;

  return (
    <Container>
      <Image
        src="/assets/common/left_arrow.svg"
        width="16"
        height="16"
        alt="back"
      />
      {text}
    </Container>
  );
};

export default Tobbar;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1.2rem 0;
  gap: 0.8rem;

  img {
    cursor: pointer;
  }
  ${({ theme }) => theme.fonts.body1_b};
  color: ${({ theme }) => theme.colors.b800};
`;
