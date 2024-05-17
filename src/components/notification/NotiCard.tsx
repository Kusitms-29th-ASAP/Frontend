import { theme } from "@/styles/theme";
import { useRouter } from "next/navigation";
import styled from "styled-components";

interface NotiProps {
  category: string;
  id: string;
  date: string;
  text: string;
}

const NotiCard = (props: NotiProps) => {
  const router = useRouter();
  const { category, id, date, text } = props;

  const handleMovePage = () => {
    if (id === "notification") {
      router.push("/news/school");
    } else if (id === "study") {
      router.push("/study");
    }
  };

  return (
    <Card onClick={handleMovePage}>
      <Div>
        <Top>
          <Br>{category}</Br>
          {date}
        </Top>
        <Point />
      </Div>
      {text}
    </Card>
  );
};

export default NotiCard;

const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 66px;
  padding: 12px;
  border-radius: 10px;
  background: ${theme.colors.white};
  color: ${theme.colors.b400};
  ${(props) => props.theme.fonts.caption1_m};
`;

const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Br = styled.div`
  color: ${theme.colors.b600};
  ${(props) => props.theme.fonts.body3_b};
`;

const Point = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${theme.colors.sub_mint};
`;
