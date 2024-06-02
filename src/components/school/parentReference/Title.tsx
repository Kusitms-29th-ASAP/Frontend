import Image from "next/image";
import styled from "styled-components";

interface TitleProps {
  title: string;
}

const Title = (props: TitleProps) => {
  const { title } = props;

  return (
    <Container>
      <Image
        src="/assets/school/graduation.svg"
        alt="graduation"
        width={24}
        height={24}
      />
      <div>{title}</div>
    </Container>
  );
};

export default Title;

const Container = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  div {
    ${({ theme }) => theme.fonts.body2_b};
    color: ${({ theme }) => theme.colors.b700};
  }
`;
