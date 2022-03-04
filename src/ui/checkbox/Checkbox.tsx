import styled from "styled-components";

import { CheckIcon } from "../../assets/icons/CheckIcon";
import { CustomError } from "../error/Error";
import { ILink } from "../link/Link";

interface Props {
  error?: string;
  checked?: boolean;
  onChange: (value: boolean) => void;
}
export const Checkbox = ({ error, checked, onChange }: Props) => {
  return (
    <Container>
      <CheckboxContainer>
        <CustomCheckbox checked={checked} onClick={(value) => onChange(!value)}>
          {checked ? (
            <Icon>
              <CheckIcon />
            </Icon>
          ) : (
            ""
          )}
        </CustomCheckbox>
        <Agreement>
          Я согласен с <ILink to="/agreement"> пользовательским соглашением</ILink> и
          <ILink to="/politics"> политикой обработки персональных данных пользователей</ILink>
        </Agreement>
      </CheckboxContainer>
      <ErrorContainer>
        <CustomError error={error} />
      </ErrorContainer>
    </Container>
  );
};
const Container = styled.div`
  width: auto;
  margin-bottom: 6px;
  display: flex;
  flex-direction: column;
`;

const CheckboxContainer = styled.div`
  width: 100%;
  display: flex;
`;

const CustomCheckbox = styled.div<{ checked?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3px;
  height: 16px;
  width: 19px;
  box-sizing: border-box;
  border-radius: 2px;
  border: ${({ checked }) => (checked ? "1px solid transparent" : "1px solid #d9d9d9")};
  margin-right: 8px;
  cursor: pointer;
`;

const Agreement = styled.div`
  font-size: 14px;
  line-height: 22px;
  justify-content: center;
`;

const Icon = styled.div`
  position: absolute;
  height: 15px;
  bottom: 1px;
`;
const ErrorContainer = styled.div`
  margin-left: 24px;
`;
