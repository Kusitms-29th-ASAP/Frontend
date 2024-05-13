import CustomInput from "@/components/common/CustomInput";
import { useState } from "react";
import styled from "styled-components";

const ReplyCompleted = () => {
  const [selected, setSelected] = useState<string>("지난주");

  return (
    <Container>
      <TitleBox>
        <Title>회신이 완료된 가정통신문</Title>
        <SubTitle>과거에 제출했던 가정통신문을 확인해볼까요?</SubTitle>
      </TitleBox>
      <CustomInput inputType="select" value={selected} onChange={() => {}} />
    </Container>
  );
};

export default ReplyCompleted;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 32px 20px 16px 20px;
  gap: 16px;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Title = styled.div`
  ${({ theme }) => theme.fonts.body2_b};
  color: ${({ theme }) => theme.colors.b700};
`;

const SubTitle = styled.div`
  ${({ theme }) => theme.fonts.body3_r};
  color: ${({ theme }) => theme.colors.b400};
`;
