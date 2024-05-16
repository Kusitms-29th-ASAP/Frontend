import Topbar from "@/components/common/Topbar";
import Image from "next/image";
import styled from "styled-components";
import Subtitle from "@/components/signin/Subtitle";
import CustomInput from "@/components/common/CustomInput";
import Calendar from "@/components/common/Calendar";

export const Children = () => {
  return (
    <>
      <Top>
        <Topbar text="자녀관리" icon={true} link="/mypage" />
        <div>
          설정 자녀 전환하기
          <Image
            src="/assets/icons/ic_flip_gray.svg"
            width={24}
            height={24}
            alt="change"
          />
        </div>
      </Top>
      <Profile>
        <Image
          src="/assets/images/profile_background.svg"
          layout="fill"
          objectFit="cover"
          alt="background"
        />
        <Image
          src="/assets/images/grade3.svg"
          width={124}
          height={124}
          alt="character"
        />
        <Info></Info>
      </Profile>
      <Content>
        {/* <div>
          <Subtitle>이름</Subtitle>
          <CustomInput
            value={data.name}
            onChange={handleNameChange}
            placeholder="성함"
          />
        </div>
        <div>
          <Subtitle>생년월일</Subtitle>
          <Calendar
            value={data.date}
            color="black"
            disabled={true}
            onChange={() => {}}
          />
        </div>
        <div>
          <Subtitle>알레르기 유발정보</Subtitle>
          <CustomInput
            value={김동우}
            onChange={handleNameChange}
            placeholder="없음"
          />
        </div> */}
      </Content>
    </>
  );
};

const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Profile = styled.div`
  width: 100%;
  position: relative;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 16px;
`;

const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;
