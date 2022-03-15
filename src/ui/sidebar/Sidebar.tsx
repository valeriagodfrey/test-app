import React, { useState } from "react";
import styled from "styled-components";

import { CustomersIcon } from "../../assets/icons/CustomersIcon";
import { DashboardIcon } from "../../assets/icons/DashboardIcon";
import { DocumentsIcon } from "../../assets/icons/DocumentsIcon";
import { HelpIcon } from "../../assets/icons/HelpIcon";
import { ReportsIcon } from "../../assets/icons/ReportsIcon";
import { SettingsIcon } from "../../assets/icons/SettingsIcon";
import { Accordion } from "../accordion/Accordion";

export const Sidebar = () => {
  return (
    <Container>
      <MenuLine>
        <Option>
          <Icon type="icon">
            <DashboardIcon />
          </Icon>
          <Label>Dashboard</Label>
        </Option>
        <Option>
          <Icon type="icon">
            <ReportsIcon />
          </Icon>
          <Label>Reports</Label>
        </Option>
        <Option drop>
          <Accordion
            label="Documents"
            icon={<DocumentsIcon />}
            content={
              <>
                <Option>
                  <Box>
                    <Label>Invoices</Label>
                  </Box>
                </Option>
                <Option>
                  <Box>
                    <Label>Drafts</Label>
                  </Box>
                </Option>
                <Option>
                  <Box>
                    <Label>Templates</Label>
                  </Box>
                </Option>
              </>
            }
          />
        </Option>
        <Option drop style={{ paddingBottom: 0 }}>
          <Accordion
            label="Customers"
            icon={<CustomersIcon />}
            content={
              <>
                <Option>
                  <Box>
                    <Label>Invoices</Label>
                  </Box>
                </Option>
                <Option>
                  <Box>
                    <Label>Drafts</Label>
                  </Box>
                </Option>
                <Option>
                  <Box>
                    <Label>Templates</Label>
                  </Box>
                </Option>
              </>
            }
          />
        </Option>
        <Option>
          <Icon type="icon">
            <SettingsIcon />
          </Icon>
          <Label>Settings</Label>
        </Option>
        <Option>
          <Icon type="icon">
            <HelpIcon />
          </Icon>
          <Label>Help & Contact</Label>
        </Option>
      </MenuLine>
    </Container>
  );
};
const Container = styled.div`
  width: 14%;
  height: calc(100vh - 40px);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  padding-top: 40px;
`;

const MenuLine = styled.div``;

const Option = styled.div<{ drop?: boolean }>`
  width: auto;
  justify-content: ${({ drop }) => (drop ? "space-between" : "left")};
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: ${({ drop }) => (drop ? "9px 0px 0px 24px" : "9px 0px 9px 24px")};
  color: #595959;
  :hover {
    background: #e6f7ff;
    color: #1890ff;
  }
  :active {
    border-right: ${({ drop }) => (drop ? "none " : "3px solid #1890ff")};
  }
  transition: all 0.1s linear;
`;

const Icon = styled.div<{ type?: "arrow" | "icon" }>`
  align-items: center;
  margin-right: ${({ type }) => (type === "icon" ? "8px" : "24px")};
`;

const Label = styled.div`
  font-size: 14px;
  line-height: 22px;
`;

const Box = styled.div`
  display: flex;
`;
