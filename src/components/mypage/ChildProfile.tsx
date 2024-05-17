import { theme } from "@/styles/theme";
import styled from "styled-components";

interface ChildProfileProps {
  name: string;
  school: string;
  grade: number;
  classInfo: number;
}

const ChildProfile: React.FC<ChildProfileProps> = ({
  name,
  school,
  grade,
  classInfo,
}) => {
  const gradeImageSrc = `/assets/images/grade${grade}.svg`;

  return (
    <Profile>
      <GradeImage
        src={gradeImageSrc}
        width={102}
        height={102}
        alt="character"
      />
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

const Profile = styled.div`
  width: 100%;
  height: 67px;
  border-radius: 12px;
  overflow: hidden;
  position: relative !important;
  border: 1px solid ${theme.colors.b200};
  background: ${theme.colors.b100};
`;

const GradeImage = styled.img`
  position: absolute;
  bottom: -15px;
  right: 0;
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
