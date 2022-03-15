import React from "react";
import styled from "styled-components";

import { PageHeader } from "../ui/header/PageHeader";
import { Sidebar } from "../ui/sidebar/Sidebar";

export const HomePage = () => {
  return (
    <Container>
      <Sidebar />
      <ContentContainer>
        <PageHeader />
        <Content />
      </ContentContainer>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
`;

const ContentContainer = styled.div`
  width: 100%;
`;

const Content = styled.div`
  background: #f0f2f5;
`;
