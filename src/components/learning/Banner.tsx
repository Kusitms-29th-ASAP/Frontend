import Image from "next/image";
import styled from "styled-components";

const Banner = () => {
  return (
    <BannerBox>
      <Image
        src="/assets/learning/banner.svg"
        alt="learning"
        layout="fill"
        objectFit="contain"
      />
    </BannerBox>
  );
};

export default Banner;

const BannerBox = styled.div`
  img {
    width: 100%;
    height: 100%;
    position: relative !important;
    object-fit: cover;
  }
`;
