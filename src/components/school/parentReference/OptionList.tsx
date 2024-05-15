import More from "@/components/common/More";
import WhiteBox from "../WhiteBox";
import { useRouter } from "next/navigation";
import styled from "styled-components";

interface OptionListProps {
  optionList: string[];
}

const OptionList = (props: OptionListProps) => {
  const { optionList } = props;
  const router = useRouter();

  const handleOptionClick = (option: string) => {
    if (option === "결석 사유서") {
      router.push("/school/parentReference/absentReason/form");
    } else if (option === "사유서 제출 내역") {
      router.push("/school/parentReference/absentReason/submission");
    }

    if (option === "교외 체험학습 신청서") {
      router.push("/school/parentReference/workStudy/form");
    } else if (option === "신청서 제출 내역") {
      router.push("/school/parentReference/workStudy/submission");
    }
  };

  return (
    <WhiteBox>
      <OptionListBox>
        {optionList.map((option, idx) => (
          <More
            key={idx}
            text={option}
            moreType={"text"}
            onClick={() => handleOptionClick(option)}
          />
        ))}
      </OptionListBox>
    </WhiteBox>
  );
};

export default OptionList;

const OptionListBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
