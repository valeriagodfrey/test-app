import React from "react";
import styled from "styled-components";

interface Props {
  error?: string;
}
export const CustomError = ({ error }: Props) => {
  return <Container>{error}</Container>;
};
const Container = styled.div`
  color: #f5222d;
  font-size: 12px;
  line-height: 20px;
`;
