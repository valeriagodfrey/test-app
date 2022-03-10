import React, { ButtonHTMLAttributes, FC } from "react";
import styled from "styled-components";

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};
const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 24px;
  background-color: #1890ff;
  color: #ffffff;
  display: flex;
  border-radius: 2px;
  padding: 8px 16px;
  cursor: pointer;
  border: none;
`;
