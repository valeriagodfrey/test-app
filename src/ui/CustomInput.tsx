import React from "react";
import styled from "styled-components";

interface InputProps {
  placeholder?: string;
  type?: string;
  error?: string;
}
export const CustomInput = ({ placeholder, error, type }: InputProps) => {
  return (
    <Container>
      <Input error={error} placeholder={placeholder} />
      <Error>{error}</Error>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: auto;
  max-width: 600px;
  margin-bottom: 24px;
`;

const Input = styled.input<{ error?: string }>`
  width: 100%;
  padding: 8px 12px;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid;
  border-color: ${({ error }) => (error ? "#F5222D" : "#D9D9D9")};
  border-radius: 2px;
  box-shadow: ${({ error }) =>
    error ? "0px 0px 4px rgba(245, 34, 45, 0.5)" : "transparent"};
  margin-bottom: 6px;
  ::placeholder {
    color: #bfbfbf;
  }
`;

const Error = styled.div`
  color: #f5222d;
  font-size: 12px;
  line-height: 20px;
`;
