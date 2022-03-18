import React, { FC } from "react";
import styled from "styled-components";

import { PageHeader } from "../header/PageHeader";
import { Sidebar } from "../sidebar/Sidebar";

export const Layout: FC = ({ children }) => {
  return (
    <Container>
      <Sidebar />
      <RightContainer>
        <PageHeader />
        <ContentContainer>
          <Content>{children}</Content>
        </ContentContainer>
      </RightContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
`;

const RightContainer = styled.div`
  width: 100%;
`;

const ContentContainer = styled.div`
  padding: 24px;
  background: #f0f2f5;
  height: calc(100vh - 175px);
`;
const Content = styled.div`
  padding: 22px;
  background: #ffffff;
  height: 100%;
`;
