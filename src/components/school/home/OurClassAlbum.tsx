import More from "@/components/common/More";
import styled from "styled-components";
import { classAlbumData } from "@/data/schoolData";
import Album from "./Album";

const OurClassAlbum = () => {
  return (
    <Container>
      <TitleBox>
        <Title>우리 반 앨범 속으로</Title>
        <More onClick={() => {}} />
      </TitleBox>

      <ImageList>
        {classAlbumData.map((album) => (
          <Album key={album.id} album={album} />
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
