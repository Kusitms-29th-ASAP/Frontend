import { theme } from "@/styles/theme";
import styled from "styled-components";

interface KeywordItemProps {
  keyword: string;
}

const KeywordItem = ({ keyword }: KeywordItemProps) => {
  return <Keyword>{keyword}</Keyword>;
};
export default KeywordItem;

const Keyword = styled.div`
  width: auto;
  display: flex;
  padding: 6px 8px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: rgba(255, 135, 0, 0.15);
  color: ${theme.colors.primary500};
  ${(props) => props.theme.fonts.caption1_b};
  cursor: default;
`;
