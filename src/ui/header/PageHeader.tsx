import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import { PlusIcon } from "../../assets/icons/PlusIcon";
import { Breadcrumbs } from "../breadcrumbs/Breadcrumbs";
import { Button } from "../button/Button";
import { paths } from "./paths";

export const PageHeader = () => {
  const location = useLocation();
  const title = location.pathname.replace(/\//g, "")[0].toUpperCase() + location.pathname.slice(2);
  const crumbs = [
    { path: "/home", name: "Home" },
    {
      path: location.pathname,
      name: location.pathname === "/home" ? "" : title,
    },
  ];

  return (
    <Container>
      <Breadcrumbs data={crumbs} />
      <Title>{title}</Title>
      <Box>
        <Submenu>
          <Block>All invoices</Block>
          <Block>Due</Block>
          <Block>Paid</Block>
          <Block>Unpaid</Block>
          <Block>Archived</Block>
        </Submenu>
        <ButtonContainer>
          <Button>
            <Icon>
              <PlusIcon />
            </Icon>
            Add new invoice
          </Button>
        </ButtonContainer>
      </Box>
    </Container>
  );
};
const Container = styled.div`
  max-height: 125px;
  padding: 11px 22px 0px;
`;

const Title = styled.div`
  margin: 8px 0px 12px;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
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

const Icon = styled.span`
  margin-right: 4px;
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ButtonContainer = styled.div``;
