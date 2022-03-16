import { createSelector } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { RootState, store } from "../core/redux/store";
import { Button } from "../ui/button/Button";
import { CustomInput } from "../ui/input/Input";
import { ILink } from "../ui/link/Link";

interface Props {
  email: string;
}
export const getUsersSelector = createSelector(
  (state: RootState) => state.signUp.list,
  (state) => state,
);

export const ForgotPassword = () => {
  const [emailMatch, setEmailMatch] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm<Props>();

  const users = useSelector(getUsersSelector);
  const currentEmail = getValues("email");

  const onSubmit = (user: Props) => {
    const currentUser = user;
    const regUser = users.find((item) => item.email === currentUser.email);

    if (currentUser.email === regUser?.email) {
      setEmailMatch((s) => !s);
    } else {
      alert("Пользователь с указанным Email не найден");
    }
  };
  return (
    <WrapperContainer>
      <Title>StaffPro</Title>
      {emailMatch === false ? (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Caption>Забыли пароль?</Caption>
          <Label>Введите ваш эл. адрес, чтобы восстановить доступ к своему аккаунту</Label>
          <CustomInput
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
            error={errors.email?.type === "required" ? "Обязательное поле" : ""}
          />
          <Button size="big">Подтвердить</Button>
          <SignUp>
            Впервые в StaffPro? <ILink to="/registration">Зарегистрируйтесь</ILink>
          </SignUp>
        </Form>
      ) : (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Caption>Восстановление доступа к аккаунту</Caption>
          <Label>
            На электронный адрес {currentEmail !== "" ? currentEmail : undefined} отправлено письмо.
            Перейдите по ссылке в письме для создания нового пароля.
          </Label>

          <Button size="big" onClick={() => navigate("/home")}>
            На главную
          </Button>
        </Form>
      )}
    </WrapperContainer>
  );
};
const WrapperContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  background-color: #f0f2f5;
`;

const Title = styled.div`
  margin: 134px 0px 64px;
  font-size: 56px;
  line-height: 64px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 330px;
  padding: 24px;
  background: #ffffff;
`;

const Caption = styled.div`
  align-items: center;
  text-align: center;
  font-size: 20px;
  line-height: 28px;
  font-weight: 600;
  color: #262626;
`;

const Label = styled.div`
  line-height: 22px;
  margin: 24px 0px;
`;

const SignUp = styled.div`
  font-size: 16px;
  line-height: 22px;
  margin-top: 24px;
  text-align: center;
`;
