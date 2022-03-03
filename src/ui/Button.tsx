import React, { FC } from "react";
import styled from "styled-components";

export const Button: FC = ({ children }) => {
  return <Container>{children}</Container>;
};
const Container = styled.div`
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
  padding: 8px 0px;
`;
