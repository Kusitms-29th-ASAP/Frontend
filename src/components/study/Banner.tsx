import Image from "next/image";
import styled from "styled-components";

const Banner = () => {
  return (
    <BannerBox>
      <Image
        src="/assets/study/banner.svg"
        alt="study"
        layout="fill"
        objectFit="contain"
      />
    </BannerBox>
  );
};

export default Banner;

const BannerBox = styled.div`
  margin: 8px 0 20px 0;

  img {
    width: 100%;
    height: 100%;
    position: relative !important;
    object-fit: cover;
  }
`;
