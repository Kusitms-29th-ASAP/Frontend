import { SubjectData } from "@/data/subjectData";
import SubjectContent from "./SubjectContent";
import styled from "styled-components";
import { useState } from "react";

const Subjects = () => {
  const [selectedId, setSelectedId] = useState(0);

  const handleSubjectSelect = (id: number) => {
    setSelectedId(id);
  };

  return (
    <Container>
      {SubjectData.map((subject) => (
        <SubjectContent
          key={subject.id}
          id={subject.id}
          title={subject.title}
          isSelected={selectedId === subject.id}
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
