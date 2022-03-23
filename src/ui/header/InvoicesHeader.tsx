import React, { useState } from "react";
import styled from "styled-components";

import { PlusIcon } from "../../assets/icons/PlusIcon";
import { Button } from "../button/Button";
import { Drawer } from "../drawer/Drawer";
import { TabsList } from "./data";

export const InvoicesHeader = () => {
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("1");
  return (
    <div>
      <Box>
        <Submenu>
          {TabsList.map((tab) => (
            <Tab onClick={() => setActiveTab(tab.value)} active={activeTab === tab.value && true}>
              {tab.label}
            </Tab>
          ))}
        </Submenu>
        <ButtonContainer>
          <Button onClick={() => setShow((s) => !s)}>
            <Icon>
              <PlusIcon />
            </Icon>
            Add new invoice
          </Button>
        </ButtonContainer>
      </Box>
      <Drawer type="seeker" visible={show} onClick={() => setShow((s) => !s)} />
    </div>
  );
};
const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Submenu = styled.div`
  display: flex;
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

const ButtonContainer = styled.div``;

const Icon = styled.span`
  margin-right: 4px;
`;
