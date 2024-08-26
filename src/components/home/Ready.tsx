import { theme } from "@/styles/theme";
import Image from "next/image";
import styled from "styled-components";
import Todo from "./Todo";
import Notification from "./Notification";
import { useEffect, useState } from "react";
import { Child } from "@/app/mypage/page";
import Axios from "@/apis/axios";

const Ready = () => {
  const [childList, setChildList] = useState<Child[]>([]);
  const [childrenName, setChildrenName] = useState("");

  /* 자녀 전체 불러오기 */
  useEffect(() => {
    Axios.get(`/api/v1/children`)
      .then((response) => {
        const data = response.data.childList;
        setChildList(data);
      })
      .catch((error) => {});
  }, []);

  /* 선택 자녀 불러오기 */
  useEffect(() => {
    if (childList.length > 0) {
      const primaryChild = childList.find((child) => child.isPrimary);
      Axios.get(`/api/v1/children/${primaryChild?.childId}`)
        .then((response) => {
          const data = response.data;
          setChildrenName(data.childName);
        })
        .catch((error) => {});
    }
  }, [childList]);

  return (
    <Box>
      <Top>
        <Title>
          우리 아이 등교 준비를
          <br />
          시작해볼까요?
        </Title>
        <LineBox>
          설정된 자녀
          <Name>{childrenName}</Name>
          <Image
            src="/assets/icons/ic_flip.svg"
            alt="병아리"
            width={20}
            height={20}
          />
        </LineBox>
        <StyledImage
          src="/assets/images/home_egg.svg"
          alt="병아리"
          width={230}
          height={230}
        />
      </Top>
      {/* <Todo />
      <Notification /> */}
    </Box>
  );
};

export default Ready;

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 9px 0px;
  gap: 31px;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

const Title = styled.div`
  color: ${theme.colors.white};
  ${(props) => props.theme.fonts.heading2_b};
  letter-spacing: -0.4px;
`;

const LineBox = styled.div`
  display: inline-flex;
  padding: 12px 96px 12px 12px;
  align-items: center;
  gap: 8px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.6);
  ${(props) => props.theme.fonts.body3_m};
`;

const Name = styled.div`
  color: ${theme.colors.white};
  ${(props) => props.theme.fonts.body3_b};
`;

const StyledImage = styled(Image)`
  position: absolute;
  top: 66px;
  right: -20px;
`;
