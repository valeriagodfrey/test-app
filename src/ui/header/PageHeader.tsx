import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import { Breadcrumbs } from "../breadcrumbs/Breadcrumbs";
import { Drawer } from "../drawer/Drawer";
import { InvoicesHeader } from "./InvoicesHeader";

export const PageHeader = () => {
  const location = useLocation();
  const title = location.pathname.replace(/\//g, "")[0].toUpperCase() + location.pathname.slice(2);
  const [show, setShow] = useState(false);

  const crumbs = [
    { path: "/home", name: "Home" },
    {
      path: location.pathname,
      name: location.pathname === "/home" ? "" : title,
    },
  ];

  return (
    <>
      <Container>
        <Breadcrumbs data={crumbs} />
        <Title>{title}</Title>
        {location.pathname === "/documents/invoices" ? <InvoicesHeader /> : ""}
      </Container>
      <Drawer type="seeker" visible={show} onClick={() => setShow((s) => !s)} />
    </>
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
