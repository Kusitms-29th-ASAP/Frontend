import styled from "styled-components";
import EditorNote from "./EditorNote";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ReviewData } from "@/data/reviewData";

const Content = () => {
  const pathname = usePathname();
  const id = pathname.split("/").pop();
  const review = ReviewData.find((review) => review.id === Number(id));

  return (
    <Container>
      {review && (
        <>
          <EditorNote editorNote={review.editorNote ? review.editorNote : ""} />
          {review.text1 && <Text>{review.text1}</Text>}
          {review.image1 && (
            <ImageBox>
              <Image
                src={review.image1}
                alt="study"
                layout="fill"
                objectFit="contain"
              />
            </ImageBox>
          )}

          {review.text2 && <Text>{review.text2}</Text>}
          {review.image2 && (
            <ImageBox>
              <Image
                src={review.image2}
                alt="study"
                layout="fill"
                objectFit="contain"
              />
            </ImageBox>
          )}

          {review.text3 && <Text>{review.text3}</Text>}
          {review.image3 && (
            <ImageBox>
              <Image
                src={review.image3}
                alt="study"
                layout="fill"
                objectFit="contain"
              />
            </ImageBox>
          )}

          {review.text4 && <Text>{review.text4}</Text>}
        </>
      )}
    </Container>
  );
};

export default Content;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: ${({ theme }) => theme.colors.b50};
  gap: 17px;
`;

const Text = styled.div`
  ${({ theme }) => theme.fonts.body3_m};
  color: ${({ theme }) => theme.colors.b700};
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    position: relative !important;
    object-fit: cover;
  }
`;
