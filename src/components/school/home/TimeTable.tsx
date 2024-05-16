import More from "@/components/common/More";
import WhiteBox from "../WhiteBox";
import DateSelect from "./DateSelect";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const TimeTable = () => {
  const router = useRouter();

  const handleDetailClick = () => {
    router.push("/school/weeklyStudy");
  };

  return (
    <WhiteBox>
      <TopBox>
        <DateSelect type={"week"} />
        <More text="일정 자세히 보기" onClick={handleDetailClick} />
      </TopBox>
    </WhiteBox>
  );
};

export default TimeTable;

const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
