import React, { ButtonHTMLAttributes, FC } from "react";
import styled from "styled-components";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "medium" | "big";
}

export const Button: FC<Props> = ({ children, size = "medium", ...rest }) => {
  return (
    <Container size={size} {...rest}>
      {children}
    </Container>
  );
};
const Container = styled.button<{ size?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  font-size: ${({ size }) => (size === "big" ? `16px` : `14px`)};
  line-height: 24px;
  background-color: #1890ff;
  color: #ffffff;
  display: flex;
  border-radius: 2px;
  padding: ${({ size }) => (size === "big" ? `8px 16px` : `5px 16px`)};
  cursor: pointer;
  border: none;
`;
