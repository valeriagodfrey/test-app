import { FC } from "react";
import styled from "styled-components";

import { CheckIcon } from "../../assets/icons/CheckIcon";
import { CustomError } from "../error/Error";

interface Props {
  error?: string;
  checked?: boolean;
  onChange: (value: boolean) => void;
}
export const Checkbox: FC<Props> = ({ error, checked, onChange, children }) => {
  return (
    <Container>
      <CheckboxContainer>
        <CustomCheckbox checked={checked} onClick={(value) => onChange(!value)} error={error}>
          {checked ? (
            <Icon>
              <CheckIcon />{" "}
            </Icon>
          ) : (
            ""
          )}
        </CustomCheckbox>
        <Agreement>{children}</Agreement>
      </CheckboxContainer>

      <ErrorContainer>
        <CustomError error={error} />
      </ErrorContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const CheckboxContainer = styled.div`
  cursor: pointer;
  display: grid;
  grid-template-columns: 16px 1fr;
  grid-gap: 8px;
`;

const CustomCheckbox = styled.div<{ error?: string; checked?: boolean }>`
  position: relative;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  align-items: center;
  border-radius: 2px;

  border: ${({ checked }) => (checked ? "1px solid #1890ff" : " 1px solid #d9d9d9")};
  margin-top: 3px;
`;

const Icon = styled.div`
  position: absolute;
  height: 16px;
  margin-bottom: 2px;
  margin-left: -1px;
`;
const Agreement = styled.div`
  font-size: 14px;
  line-height: 22px;
  justify-content: center;
`;

const ErrorContainer = styled.div`
  margin: 6px 0px 24px 21px;
`;
