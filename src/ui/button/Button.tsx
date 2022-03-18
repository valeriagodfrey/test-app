import React, { ButtonHTMLAttributes, FC } from "react";
import styled from "styled-components";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "medium" | "big";
  styleType?: "primary" | "secondary";
}

export const Button: FC<Props> = ({
  children,
  size = "medium",
  styleType = "primary",
  ...rest
}) => {
  return (
    <Container styleType={styleType} size={size} {...rest}>
      {children}
    </Container>
  );
};
const Container = styled.button<{ size?: string; styleType?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  font-size: ${({ size }) => (size === "big" ? `16px` : `14px`)};
  line-height: 24px;
  background-color: ${({ styleType }) => (styleType === "secondary" ? ` #FFFFFF` : `#1890ff`)};
  color: ${({ styleType }) => (styleType === "secondary" ? ` #595959` : `#ffffff`)};
  display: flex;
  border-radius: 2px;
  padding: ${({ size }) => (size === "big" ? `8px 16px` : `5px 16px`)};
  cursor: pointer;
  border: ${({ styleType }) => (styleType === "secondary" ? `1px solid #D9D9D9` : `none`)};
`;
