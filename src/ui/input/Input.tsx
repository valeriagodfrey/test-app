import React, { forwardRef, InputHTMLAttributes, useState } from "react";
import styled from "styled-components";

import { EyeIcon } from "../../assets/icons/EyeIcon";
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
    <Container>
      <InputContainer>
        {params.withLabel ? <Label>{params.label}</Label> : undefined}
        <Input {...params} type={type} ref={ref} error={params.error} />
        {type === "password" && (
          <Icon withLabel={params.withLabel} onClick={changeType}>
            <EyeIcon type={type} />
          </Icon>
        )}
      </InputContainer>
      <CustomError error={params.error} />
    </Container>
  );
});

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: auto;
  max-width: 600px;
  margin-bottom: 24px;
  cursor: pointer;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
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
  margin-bottom: 6px;
  ::placeholder {
    color: #bfbfbf;
  }
  :focus {
    border: 0;
  }
`;

const Icon = styled.div<{ withLabel?: boolean }>`
  width: 18px;
  position: absolute;
  display: flex;
  right: 11px;
  margin-bottom: ${({ withLabel }) => (withLabel ? `0px` : `6px`)};
  margin-top: ${({ withLabel }) => (withLabel ? `18px` : `0px`)};
  cursor: pointer;
`;

const Label = styled.div`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 2px;
`;
