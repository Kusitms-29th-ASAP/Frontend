import More from "@/components/common/More";
import styled from "styled-components";
import Image from "next/image";
import { classAlbumData } from "@/data/schoolData";

const OurClassAlbum = () => {
  return (
    <Container>
      <TitleBox>
        <Title>우리 반 앨범 속으로</Title>
        <More onClick={() => {}} />
      </TitleBox>

      <ImageList>
        {classAlbumData.map((album) => (
          <ImageBox key={album.id}>
            <ImageOverlay />
            <Image src={album.src} alt="album" width={114} height={142} />
            <Content>
              <div>{album.title}</div>
              <span>{album.date}</span>
            </Content>
          </ImageBox>
        ))}
      </ImageList>
    </Container>
  );
};

export default OurClassAlbum;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 20px 60px 20px;
  gap: 8px;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 6px;
`;

const Title = styled.div`
  ${({ theme }) => theme.fonts.body2_b};
  color: ${({ theme }) => theme.colors.b600};
`;

const ImageList = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
`;

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
