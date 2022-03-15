import { useLocation } from "react-router-dom";
import styled from "styled-components";

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
      <Breadcrumbs></Breadcrumbs>
      <Title>{title}</Title>
      <Submenu>
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
      </Submenu>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  max-height: 125px;
  padding: 11px 22px;
`;

const Title = styled.div`
  margin: 8px 24px;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
`;
const Submenu = styled.div``;

const Breadcrumbs = styled.div``;

const Block = styled.div`
  font-size: 14px;
  line-height: 22px;
  padding: 11px 0px;
`;
