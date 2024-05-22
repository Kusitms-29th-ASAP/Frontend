import ListBox from "@/components/common/ListBox";
import More from "@/components/common/More";
import { todoHomeData } from "@/data/newsData";
import { theme } from "@/styles/theme";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styled from "styled-components";

interface TodoHomeListsProps {
  expanded: boolean;
}

const HomeGuide = () => {
  const router = useRouter();

  return (
    <>
      <Container>
        <Title>
          <div>
            <Em>가정통신문 제출</Em> 잊지마세요!
          </div>
          <More
            onClick={() => {
              router.push("/school/homeGuide");
            }}
          />
        </Title>
        <TodoHomeLists>
          {todoHomeData.map((data, index) => (
            <ListBox
              key={index}
              listboxType="none"
              color={data.time === "제출 완료" ? "mint" : "orange"}
              dday={3}
              text={data.text}
              time={data.time}
            />
          ))}
        </TodoHomeLists>
      </Container>
    </>
  );
};

export default HomeGuide;

const Container = styled.div`
  width: 100%;
  padding: 16px;
  gap: 10px;
  border-radius: 10px;
  background: ${theme.colors.white};
  box-shadow: 0px 0px 64px 0px rgba(30, 41, 59, 0.1);
  ${(props) => props.theme.fonts.body2_b};
  color: ${theme.colors.b700};
  z-index: 10;
  letter-spacing: -0.28px;
  position: relative;
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const Em = styled.span`
  color: ${theme.colors.primary700};
`;

const TodoHomeLists = styled.div`
  width: 100%;
  height: 140px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 20px;
`;
