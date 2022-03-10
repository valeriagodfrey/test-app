import React from "react";
import styled from "styled-components";

import { CustomersIcon } from "../../assets/icons/CustomersIcon";
import { DashboardIcon } from "../../assets/icons/DashboardIcon";
import { DocumentsIcon } from "../../assets/icons/DocumentsIcon";
import { DropdownArrow } from "../../assets/icons/DropdownArrow";
import { HelpIcon } from "../../assets/icons/HelpIcon";
import { ReportsIcon } from "../../assets/icons/ReportsIcon";
import { SettingsIcon } from "../../assets/icons/SettingsIcon";

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
          <Box>
            <Icon type="icon">
              <DocumentsIcon />
            </Icon>
            <Label>Documents</Label>
          </Box>
          <Icon type="arrow">
            <DropdownArrow />
          </Icon>
        </Option>
        <Option drop>
          <Box>
            <Icon type="icon">
              <CustomersIcon />
            </Icon>
            <Label>Customers</Label>
          </Box>
          <Icon type="arrow">
            <DropdownArrow />
          </Icon>
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
  height: 100vh;
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
  padding: 9px 0px 9px 24px;
  color: #595959;
  :hover {
    background: #e6f7ff;
    color: #1890ff;
  }
  :active {
    border-right: 3px solid #1890ff;
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
