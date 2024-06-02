import { theme } from "@/styles/theme";
import Image from "next/image";
import styled from "styled-components";

interface ChildProfileProps {
  name: string;
  school: string;
  grade: number;
  classInfo: number;
  onClick: () => void;
  selected: boolean;
}

const ChildProfile: React.FC<ChildProfileProps> = ({
  name,
  school,
  grade,
  classInfo,
  onClick,
  selected,
}) => {
  const gradeImageSrc = `/assets/common/grade${grade}.svg`;

  return (
    <Profile onClick={onClick} selected={selected}>
      <GradeImage
        src={gradeImageSrc}
        width={102}
        height={102}
        alt="character"
      />
      {selected && (
        <>
          <RoundImage
            src="/assets/images/round_graphic.svg"
            width={146}
            height={67}
            alt="round"
          />
          <RectImage
            src="/assets/images/rect_graphic.svg"
            width={36}
            height={14}
            alt="round"
          />
        </>
      )}
      <Info>
        <Br>{name}</Br>
        <span>
          {school} | {grade}학년 {classInfo}반
        </span>
      </Info>
    </Profile>
  );
};

export default ChildProfile;

const Profile = styled.div<{ selected: boolean }>`
  width: 100%;
  height: 67px;
  border-radius: 12px;
  overflow: hidden;
  position: relative !important;
  border: 1px solid ${theme.colors.b200};
  background: ${theme.colors.b100};
  cursor: pointer;

  ${({ selected }) =>
    selected &&
    `
    border-color: ${theme.colors.primary500};
    background: rgba(255, 135, 0, 0.10);
  `}
`;

const GradeImage = styled(Image)`
  position: absolute;
  bottom: -15px;
  right: 0;
  z-index: 100;
`;

const RoundImage = styled(Image)`
  position: absolute;
  bottom: 0px;
  right: 0;
`;

const RectImage = styled(Image)`
  position: absolute;
  top: -2px;
  right: -3px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: absolute;
  top: 0;
  left: 0;
  padding: 12px;
  color: ${theme.colors.b400};
  ${(props) => props.theme.fonts.body3_m};
`;

const Br = styled.div`
  color: ${theme.colors.b700};
  ${(props) => props.theme.fonts.body2_b};
`;
