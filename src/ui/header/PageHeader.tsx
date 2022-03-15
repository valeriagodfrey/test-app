import { useLocation } from "react-router-dom";
import styled from "styled-components";

import { PlusIcon } from "../../assets/icons/PlusIcon";
import { Button } from "../button/Button";
import { paths } from "./paths";

export const PageHeader = () => {
  const location = useLocation();
  const crumbs = [
    { path: "/home", name: "Home" },
    {
      path: location.pathname,
      name: paths.map((item) => (item.path === location.pathname ? item.label : "New page")),
    },
  ];
  const title = location.pathname.replace(/\//g, "")[0].toUpperCase() + location.pathname.slice(2);
  return (
    <Container>
      <Breadcrumbs>Home / Documents / Invoices</Breadcrumbs>
      <Title>{title}</Title>
      <Box>
        <Submenu>
          <Block>All invoices</Block>
          <Block>Due</Block>
          <Block>Paid</Block>
          <Block>Unpaid</Block>
          <Block>Archived</Block>
        </Submenu>
        <Button>
          <Icon>
            <PlusIcon />
          </Icon>
          Add new invoice
        </Button>
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

const Breadcrumbs = styled.div`
  font-size: 14px;
  line-height: 22px;
  color: #595959;
`;

const Block = styled.div`
  font-size: 14px;
  line-height: 22px;
  padding: 11px 0px;
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
