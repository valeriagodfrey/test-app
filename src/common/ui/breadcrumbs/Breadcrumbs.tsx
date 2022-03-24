import React, { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

export type Crumb = {
  path: string;
  name?: string | string[];
};
interface Props {
  data: Crumb[];
}

export const Breadcrumbs = ({ data }: Props) => {
  const location = useLocation();
  return (
    <Container>
      {location.pathname !== "/home" ? (
        data.map(({ name, path }, key) =>
          key + 1 === data.length ? (
            <span key={key}>{name}</span>
          ) : (
            <Fragment key={key}>
              <ILink to={path}>{name}</ILink>
              <span> / </span>
            </Fragment>
          ),
        )
      ) : (
        <Empty />
      )}
    </Container>
  );
};
const Container = styled.div`
  color: black;
  font-weight: 500;
`;
const ILink = styled(Link)`
  text-decoration: none;
  color: #8c8c8c;
  font-weight: 500;
`;

const Empty = styled.div`
  height: 21px;
`;
