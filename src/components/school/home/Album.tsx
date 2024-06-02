import styled from "styled-components";
import Image from "next/image";

interface AlbumProps {
  album: {
    id: number;
    src: string;
    title: string;
    date: string;
  };
}

const Album = (props: AlbumProps) => {
  const { album } = props;

  return (
    <ImageBox key={album.id}>
      <ImageOverlay />
      <Image src={album.src} alt="album" width={114} height={142} />
      <Content>
        <div>{album.title}</div>
        <span>{album.date}</span>
      </Content>
    </ImageBox>
  );
};

export default Album;

const ImageBox = styled.div`
  position: relative;
  width: 114px;
  height: 142px;
  cursor: pointer;
  border-radius: 8px;

  img {
    border-radius: 8px;
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-image: linear-gradient(
    180deg,
    rgba(2, 6, 23, 0) 50.94%,
    rgba(7, 12, 35, 0.7) 93.04%,
    #070c23 146.87%
  );
`;

const Content = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;

  div {
    ${({ theme }) => theme.fonts.caption1_b};
    color: ${({ theme }) => theme.colors.white};
  }
  span {
    ${({ theme }) => theme.fonts.caption3_r}
    color: ${({ theme }) => theme.colors.b400};
  }
`;
