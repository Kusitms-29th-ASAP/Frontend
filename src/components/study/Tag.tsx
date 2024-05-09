import styled from "styled-components";

export interface TagProps {
  text: string;
  tagType: "primary" | "gray";
}

const Tag = (props: TagProps) => {
  const { text, tagType = "gray" } = props;

  let tagClassName = tagType;
  if (tagType === "primary") {
    tagClassName += " primary";
  } else if (tagType === "gray") {
    tagClassName += " gray";
  }

  return <TagContainer tagType={tagType}>{text}</TagContainer>;
};

export default Tag;

const TagContainer = styled.div<{ tagType: "primary" | "gray" }>`
  ${({ theme }) => theme.fonts.body3_r};
  padding: 3px 8px;
  border-radius: 8px;

  color: ${({ theme, tagType }) =>
    tagType === "primary" ? theme.colors.primary500 : theme.colors.b400};
  background: ${({ theme, tagType }) =>
    tagType === "primary" ? "rgba(255, 135, 0, 0.15)" : theme.colors.b100};
  border: 1px solid
    ${({ theme, tagType }) =>
      tagType === "primary" ? "transparent" : theme.colors.b200};
`;
