import { SubjectData } from "@/data/subjectData";
import SubjectContent from "./SubjectContent";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setCategory } from "@/redux/slices/categorySlice";

const Subjects = () => {
  const category = useSelector((state: RootState) => state.category.value);
  const dispatch = useDispatch();

  const handleSubjectSelect = (id: number) => {
    dispatch(setCategory(id));
  };

  return (
    <Container>
      {SubjectData.map((subject) => (
        <SubjectContent
          key={subject.id}
          id={subject.id}
          title={subject.title}
          isSelected={category === subject.id}
          onSelect={handleSubjectSelect}
        />
      ))}
    </Container>
  );
};

export default Subjects;

const Container = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: nowrap;
  overflow-x: auto;
`;
