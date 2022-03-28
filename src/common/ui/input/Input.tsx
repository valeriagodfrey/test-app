import React, { forwardRef, InputHTMLAttributes, useState } from "react";
import styled from "styled-components";

import { EyeIconNew } from "../../../assets/icons/EyeIconNew";
import { CustomError } from "../error/Error";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
  withLabel?: boolean;
}
export const CustomInput = forwardRef<HTMLInputElement, InputProps>((params, ref) => {
  const [type, setType] = useState(params.type);

  const changeType = () => {
    setType(type === "password" ? "text" : "password");
  };
  return (
    <Container withLabel={params.withLabel}>
      <InputContainer error={params.error}>
        {params.withLabel ? <Label>{params.label}</Label> : undefined}
        <Input {...params} type={type} ref={ref} error={params.error} />
        {params.type === "password" && (
          <Icon withLabel={params.withLabel} error={params.error} onClick={changeType}>
            <EyeIconNew type={type} />
          </Icon>
        )}
      </InputContainer>
      <ErrorContainer withLabel={params.withLabel} error={params.error}>
        <CustomError error={params.error} />
      </ErrorContainer>
    </Container>
  );
});

const Container = styled.div<{ withLabel?: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: auto;
  max-width: 600px;
  cursor: pointer;
  height: ${({ withLabel }) => (withLabel ? "82px" : "75px")};
`;

const InputContainer = styled.div<{ error?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  position: relative;
`;

const Input = styled.input<{ error?: string }>`
  width: auto;
  padding: 7px 12px;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid;
  border-color: ${({ error }) => (error ? "#F5222D" : "#D9D9D9")};
  border-radius: 2px;
  box-shadow: ${({ error }) => (error ? "0px 0px 4px rgba(245, 34, 45, 0.5)" : "transparent")};
  ::placeholder {
    color: #bfbfbf;
  }
  :focus {
    border: 0;
  }
`;

const Icon = styled.div<{ withLabel?: boolean; error?: string }>`
  position: absolute;
  display: flex;
  right: 11px;
  bottom: ${({ withLabel }) => (withLabel ? `12px` : "none")};
  margin-top: ${({ withLabel }) => (withLabel ? `17px` : `0px`)};
  cursor: pointer;
`;

const Label = styled.div`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 2px;
`;

const ErrorContainer = styled.div<{ withLabel?: boolean; error?: string }>`
  position: absolute;
  bottom: 0;
  margin-bottom: ${({ error, withLabel }) => (error && withLabel ? "0px" : "15px")};
`;
