import More from "@/components/common/More";
import WhiteBox from "../../WhiteBox";
import DateSelect from "../DateSelect";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import TimeTableBox from "./TimeTableBox";

const TimeTable = () => {
  const router = useRouter();

  const handleDetailClick = () => {
    router.push("/school/weeklyStudy");
  };

  return (
    <WhiteBox>
      <Container>
        <TopBox>
          <DateSelect type={"week"} />
          <More text="일정 자세히 보기" onClick={handleDetailClick} />
        </TopBox>
        <TimeTableBox />
      </Container>
    </WhiteBox>
  );
};

export default TimeTable;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
