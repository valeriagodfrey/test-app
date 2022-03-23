import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";

import { store } from "../core/redux/store";
import { getEmailSelector, getUsersSelector } from "../features/selectors/Selector";
import { passwordRecovery } from "../features/user";
// import { changePassword } from "../features/user";
import { Button } from "../ui/button/Button";
import { CustomInput } from "../ui/input/Input";
import { RegisterProps } from "./registration";

interface Props {
  password: string;
  password2: string;
}

export const PasswordRecovery = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm<Props>();

  const users = useSelector(getUsersSelector);
  const currentEmail = useSelector(getEmailSelector);
  console.log(currentEmail.email);

  const onSubmit = (user: Props) => {
    const newPassword = user.password;

    dispatch(passwordRecovery({ email: currentEmail.email, password: newPassword }));

    toast.success("Новый пароль успешно сохранен");
    // eslint-disable-next-line no-console
    console.log(store.getState().signUp);

    setTimeout(() => {
      navigate("/home");
    }, 800);
  };

  return (
    <WrapperContainer>
      <Title>StaffPro</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Caption>Введите новый пароль</Caption>

        <CustomInput
          type="password"
          placeholder="Пароль"
          {...register("password", {
            required: true,
            validate: () => getValues("password").length >= 8 && getValues("password").length <= 64,
          })}
          error={
            errors.password?.type === "required"
              ? "Обязательное поле"
              : errors.password?.type === "validate"
              ? "Пароль должен содержать от 8 до 64 символов"
              : ""
          }
        />
        <CustomInput
          type="password"
          placeholder="Повторите пароль"
          {...register("password2", {
            required: true,

            validate: () => getValues("password2") === getValues("password"),
          })}
          error={
            errors.password2?.type === "required"
              ? "Обязательное поле"
              : errors.password2?.type === "validate"
              ? "Пароли не совпадают"
              : ""
          }
        />
        <Button size="big" type="submit">
          Подтвердить
        </Button>
      </Form>
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
  min-width: 282px;
`;

const Caption = styled.div`
  align-items: center;
  text-align: center;
  font-size: 20px;
  line-height: 28px;
  font-weight: 600;
  color: #262626;
  margin-bottom: 24px;
`;
