import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";

import { getUsersSelector } from "../features/selectors/Selector";
import { rememberEmail } from "../features/user";
import { Button } from "../ui/button/Button";
import { CustomInput } from "../ui/input/Input";
import { ILink } from "../ui/link/Link";

interface Props {
  email: string;
}

export const ForgotPassword = () => {
  const dispatch = useDispatch();
  const [emailMatch, setEmailMatch] = useState<boolean>();
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
      setEmailMatch(true);
      dispatch(rememberEmail(currentEmail));
    } else {
      setEmailMatch(false);
      toast.error("Пользователь с указанным Email не найден");
    }
  };
  return (
    <WrapperContainer>
      <Title>StaffPro</Title>
      {emailMatch !== true ? (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Caption>Забыли пароль?</Caption>
          <Label>Введите ваш эл. адрес, чтобы восстановить доступ к своему аккаунту</Label>
          <CustomInput
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
            error={
              errors.email?.type === "required"
                ? "Обязательное поле"
                : emailMatch === false
                ? "Пользователь с указанным Email не найден"
                : ""
            }
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

          <Button size="big" onClick={() => navigate("/password_recovery")}>
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
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #f0f2f5;
`;

const Title = styled.div`
  margin-bottom: 48px;
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