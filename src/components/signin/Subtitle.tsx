import styled from "styled-components";

interface SubtitleProps {
  children: React.ReactNode;
}

const Subtitle = ({ children }: SubtitleProps) => {
  return <SubtitleStyled>{children}</SubtitleStyled>;
};

export default Subtitle;

const SubtitleStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  ${({ theme }) => theme.fonts.body2_b};
  color: ${({ theme }) => theme.colors.b700};
  margin-bottom: 8px;

  span {
    ${({ theme }) => theme.fonts.caption1_m};
    color: ${({ theme }) => theme.colors.b400};
  }
`;
