import React, { useState } from "react";
import styled from "styled-components";

import { PlusIcon } from "../../assets/icons/PlusIcon";
import { Button } from "../button/Button";
import { Drawer } from "../drawer/Drawer";

export const InvoicesHeader = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Box>
        <Submenu>
          <Block>All invoices</Block>
          <Block>Due</Block>
          <Block>Paid</Block>
          <Block>Unpaid</Block>
          <Block>Archived</Block>
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

const Block = styled.div`
  font-size: 14px;
  line-height: 22px;
  padding: 11px 0px;
  cursor: pointer;
  :not(:last-child) {
    margin-right: 32px;
  }
`;

const ButtonContainer = styled.div``;

const Icon = styled.span`
  margin-right: 4px;
`;
