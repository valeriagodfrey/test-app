import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import { rememberTab } from "../../modules/seekers/slice";
import { tabsList } from "../header/data";
import { InvoicesHeader } from "../header/InvoicesHeader";
import { PageHeader } from "../header/PageHeader";
import { Sidebar } from "../sidebar/Sidebar";

export const Layout: FC = ({ children }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("all");

  return (
    <Container>
      <Sidebar />
      <RightContainer>
        <PageHeader>
          {location.pathname === "/documents/invoices" ? (
            <InvoicesHeader>
              {tabsList.map((tab) => (
                <Tab
                  key={tab.value}
                  onClick={() => {
                    setActiveTab(tab.value);
                    dispatch(rememberTab(tab.value));
                  }}
                  active={activeTab === tab.value && true}
                >
                  {tab.label}
                </Tab>
              ))}
            </InvoicesHeader>
          ) : (
            ""
          )}
        </PageHeader>
        <ContentContainer>
          <Content>{children}</Content>
        </ContentContainer>
      </RightContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`;

const RightContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const ContentContainer = styled.div`
  padding: 24px;
  background: #f0f2f5;
  height: calc(100vh - 124px);
`;

const Content = styled.div`
  padding: 22px;
  background: #ffffff;
`;

const Tab = styled.div<{ active?: boolean }>`
  font-size: 14px;
  line-height: 22px;
  padding: 11px 0px;
  cursor: pointer;
  :not(:last-child) {
    margin-right: 32px;
  }
  box-shadow: ${({ active }) => (active ? `inset 0px -2px 0px #1890ff` : "none")};
  transition: all 0.2s ease-in-out;
  color: ${({ active }) => (active ? `#1890ff` : "#595959")};
`;
