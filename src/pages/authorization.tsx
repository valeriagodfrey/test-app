import React, { useCallback, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import signInImage from "../assets/images/signIn.png";
import { RootState } from "../core/redux/store";
import { signIn } from "../features/user";
import { Button } from "../ui/button/Button";
import { Checkbox } from "../ui/checkbox/Checkbox";
import { Header } from "../ui/header/Header";
import { CustomInput } from "../ui/input/Input";
import { ILink } from "../ui/link/Link";

export interface AuthProps {
  email?: string;
  password?: string;
  check?: boolean;
}

export const Authorization = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<AuthProps>();

  const handleAuth = (user: AuthProps) => {
    if (user.email === "test@gmail.com" && user.password === "12345") {
      setTimeout(() => {
        navigate("/");
      }, 500);
    } else alert("Пользователь не найден!");
  };

  const onSubmit = (data: AuthProps) => {
    dispatch(signIn(data));
    handleAuth(data);
  };

  const { t } = useTranslation();
  return (
    <Container>
      <Header />
      <Main>
        <Sidebar>
          <Box>
            <Label>Staff Pro</Label>
            <Title place="sidebar">{t("title")}</Title>
          </Box>
          <Img src={signInImage} alt="signIn" />
        </Sidebar>
        <Content>
          <HeaderLine>
            <SignUp>
              Нет аккаунта?<ILink to="/registration"> Зарегистрироваться</ILink>
            </SignUp>
          </HeaderLine>
          <SignInContainer>
            <SignInForm onSubmit={handleSubmit(onSubmit)}>
              <Title place="content">Войти в Staff Pro</Title>
              <CustomInput
                type="email"
                withLabel
                label="Эл. адрес"
                {...register("email", { required: true })}
                error={errors.email?.type === "required" ? "Обязательное поле" : ""}
              />
              <CustomInput
                type="password"
                withLabel
                label="Пароль"
                {...register("password", { required: true })}
                error={errors.email?.type === "required" ? "Обязательное поле" : ""}
              />
              <Line>
                <Controller
                  name="check"
                  control={control}
                  render={(props) => (
                    <Checkbox
                      {...register("check")}
                      {...props}
                      checked={props.field.value}
                      onChange={(value) => {
                        value = !props.field.value;
                        props.field.onChange(value);
                      }}
                    >
                      Запомнить меня
                    </Checkbox>
                  )}
                />
                <ILink to="/forgot-password">Забыли пароль?</ILink>
              </Line>
              <Button>Войти</Button>
            </SignInForm>
          </SignInContainer>
        </Content>
      </Main>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const Main = styled.div`
  padding-top: 64px;
  display: grid;
  grid-template-columns: 493px 1fr;
  height: calc(100vh - 64px);
`;

const Sidebar = styled.div`
  background: #1890ff;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Content = styled.div`
  display: grid;
  grid-template-rows: 64px 1fr;
`;

const Img = styled.img`
  width: 413px;
`;

const SignUp = styled.div`
  font-size: 16px;
  line-height: 24px;
`;

const HeaderLine = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px 24px 20px;
`;

const Label = styled.div`
  font-size: 20px;
  line-height: 28px;
  color: #ffffff;
`;

const Title = styled.div<{ place: "sidebar" | "content" }>`
  font-weight: 600;
  font-size: ${({ place }) => (place === "sidebar" ? "38px" : "30px")};
  line-height: ${({ place }) => (place === "sidebar" ? "46px" : "38px")};
  color: ${({ place }) => (place === "sidebar" ? "#ffffff" : "#262626")};
  margin-bottom: 24px;
`;

const Box = styled.div`
  width: 100%;
`;

const SignInContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 24px;
`;

const SignInForm = styled.form`
  width: 464px;
`;

const Line = styled.div`
  display: flex;
  justify-content: space-between;
`;
