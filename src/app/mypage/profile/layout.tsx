"use client";

import styled from "styled-components";

const layout = (props: any) => {
  return (
    <>
      <Container>{props.children}</Container>
    </>
  );
};

export default layout;

const Container = styled.div`
  width: 100%;
  padding: 20px;
`;
