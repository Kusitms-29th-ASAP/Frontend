"use client";

import styled from "styled-components";
import { theme } from "@/styles/theme";
import Topbar from "@/components/common/Topbar";
import ListNumber from "@/components/common/ListNumber";
import { signData } from "@/data/mypageData";
import Subtitle from "@/components/signin/Subtitle";
import Button from "@/components/common/Button";
import { useRef, useState } from "react";
import { CheckBox } from "@/components/common/Checkbox.stories";
import { useRouter } from "next/navigation";
import Image from "next/image";
import SignatureCanvas from "react-signature-canvas";
import Axios from "@/apis/axios";

const Signature = () => {
  const router = useRouter();
  const [isSignatureEmpty, setIsSignatureEmpty] = useState(true);
  const sigPad = useRef<SignatureCanvas | null>(null);
  const [agree, setAgree] = useState(false);

  const handleBeginDrawing = () => {
    setIsSignatureEmpty(false);
    // console.log(isSignatureEmpty);
  };

  /* dataURL을 File로 반환하는 함수 */
  const convertDataUrlToFile = () => {
    const dataURL = sigPad.current?.toDataURL("image/png");
    const decodedURL = dataURL?.replace(/^data:image\/\sw+;base64,/, "");
    if (decodedURL) {
      const buf = Buffer.from(decodedURL, "base64");
      const blob = new Blob([buf], { type: "image/png" });
      return new File([blob], `sign.png`, { type: "image/png" });
    }
  };

  const clear = () => {
    sigPad.current?.clear();
    setIsSignatureEmpty(true);
    // console.log(isSignatureEmpty);
  };

  const save = async () => {
    if (sigPad.current?.isEmpty()) {
      alert("서명을 입력해주세요.");
      return;
    }

    /* signature 파일 */
    const signImage = convertDataUrlToFile();
    // console.log("이미지", signImage);

    router.push("/mypage/profile");

    /* signature 파일 post */
    Axios.post(`엔드포인트`, signImage)
      .then((response) => {
        router.push("/mypage/profile");
        // console.log("Signature Post Success:", response.data);
      })
      .catch(() => {
        console.error("Signature Post Error");
      });
  };

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
          style={{ cursor: "pointer" }}
        />
      </Row>
      <Div>
        <SignBox>
          <Hidden>
            <SignatureCanvas
              ref={sigPad}
              penColor="black"
              canvasProps={{
                width: 480,
                height: 168,
                className: "sigCanvas",
              }}
              onBegin={handleBeginDrawing}
            />
          </Hidden>
        </SignBox>
        {!isSignatureEmpty && (
          <Clear onClick={clear}>
            <Image
              src="/assets/icons/ic_clear.svg"
              width={20}
              height={20}
              alt="clear"
            />
            서명 지우기
          </Clear>
        )}
      </Div>
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
            save();
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

const Div = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  margin-bottom: 22.5px;
`;

const Hidden = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

const Clear = styled.div`
  width: 83px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.colors.b400};
  ${(props) => props.theme.fonts.caption1_m};
  position: absolute;
  bottom: 0;
  left: 0;
  cursor: pointer;
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

const SignBox = styled.div`
  width: 100%;
  height: 168px;
  margin-top: 12px;
  margin-bottom: 32px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${theme.colors.b200};
  background: ${theme.colors.b100};
  color: ${theme.colors.b400};
  ${(props) => props.theme.fonts.body3_m};
`;
