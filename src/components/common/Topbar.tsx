"use client";

import { theme } from "@/styles/theme";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styled from "styled-components";

export interface TopbarProps {
  text: string;
  icon?: boolean;
  link?: string;
}

const Topbar = (props: TopbarProps) => {
  const { text, icon = true, link } = props;
  const router = useRouter();

  const handleBackButtonClick = () => {
    if (link) {
      router.push(link);
    } else {
      router.back();
    }
  };

  return (
    <Container>
      {icon && (
        <Image
          src="/assets/common/left_arrow.svg"
          width="16"
          height="16"
          alt="back"
          onClick={handleBackButtonClick}
        />
      )}
      {text}
    </Container>
  );
};

export default Topbar;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1.2rem 0;
  gap: 0.8rem;
  background: ${theme.colors.white};

  img {
    cursor: pointer;
  }
  ${({ theme }) => theme.fonts.body1_b};
  color: ${({ theme }) => theme.colors.b800};
`;
