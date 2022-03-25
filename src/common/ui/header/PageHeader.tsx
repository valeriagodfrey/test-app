import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { media } from "../../../assets/media";
import { getCurrentUserSelector } from "../../../modules/authorisation/selectors";
import { signOut } from "../../../modules/authorisation/slice";
import { Breadcrumbs } from "../breadcrumbs/Breadcrumbs";
import { Button } from "../button/Button";

export const PageHeader: FC = ({ children }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const title =
    location.pathname.substring(location.pathname.lastIndexOf("/") + 1)[0].toUpperCase() +
    location.pathname.substring(location.pathname.lastIndexOf("/") + 1).slice(1);
  const path = location.pathname.replace(/\//g, "")[0].toUpperCase() + location.pathname.slice(2);

  const currentUser = useSelector(getCurrentUserSelector);

  const crumbs = [
    { path: "/home", name: "Home" },
    {
      path: location.pathname,
      name: location.pathname === "/home" ? "" : path,
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
              {t("signOut")}
            </Button>
          </User>
        </Line>
        {children}
      </Container>
    </>
  );
};

const Container = styled.div`
  width: calc(100% - 44px);

  padding: 11px 22px 0px;
  background-color: #ffff;
  position: fixed;
  flex-direction: column;
  display: flex;
  ${media.desktop} {
    max-height: 125px;
    margin-left: 200px;
    width: calc(100% - 243px);
  }
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
