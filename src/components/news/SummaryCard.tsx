import ListNumber from "@/components/common/ListNumber";
import { theme } from "@/styles/theme";
import Image from "next/image";
import styled from "styled-components";

export interface SummaryCardProps {
  isNew: boolean;
  category: string;
  title: string;
  date: string;
  look: number;
  sentence: string[];
}
const SummaryCard = ({
  isNew,
  category,
  title,
  date,
  look,
  sentence,
}: SummaryCardProps) => {
  return (
    <StyledCard>
      <Top>
        <Label>
          {isNew && <New>NEW</New>}
          <Category>{category}</Category>
        </Label>
        <Look>
          <Image
            src="/assets/icons/ic_eye.svg"
            width={16}
            height={16}
            alt="look"
          />
          {look}명이 봤어요
        </Look>
      </Top>
      <Title>{title}</Title>
      <Date>{date}</Date>
      <Sentence>
        {sentence.map((data, index) => (
          <StyledListNumber key={index} index={index + 1} text={data} />
        ))}
      </Sentence>
    </StyledCard>
  );
};

export default SummaryCard;

const StyledCard = styled.div`
  width: 100%;
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 10px;
  background: ${theme.colors.white};
  box-shadow: 0px 2px 64px 0px rgba(30, 41, 59, 0.06);
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  margin-bottom: 4px;
`;

const New = styled.div`
  height: 23px;
  display: flex;
  padding: 3px 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: ${theme.colors.primary500};
  color: ${theme.colors.white};
  ${(props) => props.theme.fonts.caption1_b};
`;

const Category = styled.div`
  height: 23px;
  display: flex;
  padding: 3px 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: rgba(5, 206, 194, 0.1);
  color: ${theme.colors.sub_mint};
  ${(props) => props.theme.fonts.caption1_m};
`;

const Look = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  color: ${theme.colors.b400};
  text-align: right;
  ${(props) => props.theme.fonts.caption2_b};
  line-height: 138%;
`;

const Title = styled.div`
  color: ${theme.colors.b700};
  ${(props) => props.theme.fonts.body2_b};
  line-height: 150%;
`;

const Date = styled.div`
  color: ${theme.colors.b400};
  ${(props) => props.theme.fonts.body3_m};
  line-height: 150%;
`;

const Sentence = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 20px;
`;

const StyledListNumber = styled(ListNumber)`
  align-items: flex-start;
  color: ${theme.colors.b600};
  ${(props) => props.theme.fonts.caption3_r};
`;
