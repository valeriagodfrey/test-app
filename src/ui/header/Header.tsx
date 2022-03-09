import { useTranslation } from "react-i18next";
import styled from "styled-components";

import { LangIcon } from "../../assets/icons/LangIcon";
import { ILink } from "../link/Link";
import { LangSelect } from "../select/LangSelect";

export const Header = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <HeaderLine>
        <LangIcon />
        <Label>
          {t("Сменить язык на ")}
          <ILink to="/authorization">english</ILink>?
        </Label>
        <Delimiter />
        <LangSelect />
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
