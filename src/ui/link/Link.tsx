import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import styled from "styled-components";

export const ILink: FC<LinkProps> = ({ children, ...rest }) => {
  return <CustomLink {...rest}>{children}</CustomLink>;
};

const CustomLink = styled(Link)`
  color: #1890ff;
  text-decoration: none;
`;
