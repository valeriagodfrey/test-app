import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { getCurrentUserSelector } from "../../features/selectors/Selector";
import { signOut } from "../../features/user";
import { Breadcrumbs } from "../breadcrumbs/Breadcrumbs";
import { Button } from "../button/Button";
import { InvoicesHeader } from "./InvoicesHeader";

export const PageHeader = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const title = location.pathname.replace(/\//g, "")[0].toUpperCase() + location.pathname.slice(2);
  const currentUser = useSelector(getCurrentUserSelector);

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
        <Line>
          <Box>
            <Breadcrumbs data={crumbs} />
            <Title>{title}</Title>
          </Box>
          <User>
            <CurrentUser>
              <Label>{currentUser.email}</Label>
            </CurrentUser>
            <Button
              onClick={() => {
                dispatch(signOut());
                navigate("/authorization");
              }}
            >
              Выйти
            </Button>
          </User>
        </Line>
        {location.pathname === "/documents/invoices" ? <InvoicesHeader /> : ""}
      </Container>
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

const Box = styled.div``;
const Line = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CurrentUser = styled.div``;

const Label = styled.div`
  margin-right: 10px;
`;

const User = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
`;
