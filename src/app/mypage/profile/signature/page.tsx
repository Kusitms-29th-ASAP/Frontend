"use client";

import styled from "styled-components";
import { theme } from "@/styles/theme";
import Topbar from "@/components/common/Topbar";
import { SignBox } from "../page";
import ListNumber from "@/components/common/ListNumber";
import { signData } from "@/data/mypageData";
import Subtitle from "@/components/signin/Subtitle";
import Button from "@/components/common/Button";
import { useState } from "react";
import { CheckBox } from "@/components/common/Checkbox.stories";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Signature = () => {
  const router = useRouter();
  const [agree, setAgree] = useState(false);

  return (
    <>
      <Row>
        <Topbar text="전자서명 등록하기" />
        <Image
          src="/assets/icons/ic_close.svg"
          width={24}
          height={24}
          alt="close"
          onClick={() => {
            router.push("/mypage/profile");
          }}
        />
      </Row>
      <SignBox />
      <Content>
        <div>
          <Subtitle>
            <Primary>스쿨포인트에 전자서명</Primary>에 대한 동의
          </Subtitle>
          <Box>
            {signData.map((data, index) => (
              <ListNumber
                key={index}
                index={index + 1}
                text={data}
                color="theme.colors.b500"
              />
            ))}
          </Box>
        </div>
        <CheckBox
          checkboxType="grayCheckbox"
          value="agree"
          text="위의 내용에 대해 확인하였으며 동의합니다."
          checked={agree}
          onChange={() => setAgree(!agree)}
        />
        <Button
          text="서명 등록하기"
          onClick={() => {
            router.push("/mypage/profile");
          }}
          disabled={!agree}
        />
      </Content>
    </>
  );
};

export default Signature;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  gap: 10px;
  border-radius: 12px;
  background: ${theme.colors.b80};
  color: ${theme.colors.b500};
  ${(props) => props.theme.fonts.caption1_m};

  .ListNumber {
    color: ${theme.colors.b500};
    ${(props) => props.theme.fonts.caption1_m};
  }
`;

const Primary = styled.div`
  color: ${theme.colors.primary500};
`;
