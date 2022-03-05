import React from "react";
import styled from "styled-components";

import { LangDown } from "../../assets/icons/LangDown";
import { LangIcon } from "../../assets/icons/LangIcon";
import { ILink } from "../link/Link";
import { CustomSelect } from "../select/Select";

export const Header = () => {
  return (
    <Container>
      <HeaderLine>
        <LangIcon />
        <Label>
          Сменить язык на <ILink to="/authorization">english</ILink>?
        </Label>
        <Delimiter />
        <CustomSelect type="lang" />

        <LangDown />
      </HeaderLine>
    </Container>
  );
};

const Container = styled.div`
  background: #ffffff;
  width: 100%;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  height: 64px;
  top: 0;
`;

const Label = styled.div`
  margin-left: 14px;
  font-size: 16px;
  line-height: 24px;
`;

const Delimiter = styled.div`
  height: 24px;
  margin: 0px 12px 0px;
  border: 1px solid #e8e8e8;
`;

const HeaderLine = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px 20px 0px;
`;
