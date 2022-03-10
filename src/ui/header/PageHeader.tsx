import React from "react";
import styled from "styled-components";
import { Breadcrumbs } from "../breadcrumbs/Breadcrumbs";

export const PageHeader = () => {
  return (
    <Container>
      <Breadcrumbs />
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
`;
