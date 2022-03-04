import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Button } from "../ui/Button";
import { CustomInput } from "../ui/CustomInput";

interface RegistrProps {
  email: string;
  name: string;
  patronymic: string;
  surname: string;
  password: string;
  password2: string;
  day: number;
  month: string;
  year: number;
  number: number;
  gender: string;
}
export const Registration = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RegistrProps>();

  const onSubmit = (data: RegistrProps) => console.log(data);
  return (
    <WrapperContainer>
      <Title>StaffPro</Title>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Caption>Зарегистрируйтесь</Caption>
        <CustomInput
          placeholder="Email"
          {...register("email", { required: true })}
          error={errors.email?.type === "required" ? "Обязательное поле" : ""}
        />
        <CustomInput
          placeholder="Фамилия"
          {...register("surname", { required: true })}
          error={errors.surname?.type === "required" ? "Обязательное поле" : ""}
        />
        <Box type="fio">
          <CustomInput
            placeholder="Имя"
            {...register("name", { required: true })}
            error={errors.name?.type === "required" ? "Обязательное поле" : ""}
          />
          <CustomInput
            placeholder="Отчество"
            {...register("patronymic", { required: true })}
            error={errors.patronymic?.type === "required" ? "Обязательное поле" : ""}
          />
        </Box>
        <CustomInput
          placeholder="Пароль"
          {...register("password", { required: true })}
          error={
            errors.password?.type === "required"
              ? "Пароль должен содержать от 8 до 64 символов"
              : ""
          }
        />
        <CustomInput
          placeholder="Пароль"
          {...register("password2", { required: true })}
          error={errors.password2?.type === "required" ? "Пароли не совпадают" : ""}
        />
        <Label>Дата рождения</Label>
        <Box type="birthday">
          <CustomInput
            placeholder="День"
            {...register("day", { required: true })}
            error={errors.day?.type === "required" ? "Обязательное поле" : ""}
          />
          <CustomInput
            placeholder="Месяц"
            {...register("month", { required: true })}
            error={errors.month?.type === "required" ? "Обязательное поле" : ""}
          />
          <CustomInput
            placeholder="Год"
            {...register("year", { required: true })}
            error={errors.year?.type === "required" ? "Обязательное поле" : ""}
          />
        </Box>
        <CustomInput
          placeholder="Телефон"
          {...register("number", { required: true })}
          error={errors.number?.type === "required" ? "Такого номера не существует" : ""}
        />
        <CustomInput
          placeholder="Пол"
          {...register("gender", { required: true })}
          error={errors.gender?.type === "required" ? "Обязательное поле" : ""}
        />
        <Button>Создать аккаунт</Button>
      </Form>
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
  text-align: center;
  font-size: 56px;
  line-height: 64px;
  margin: 32px 0px 16px;
  color: #000000;
`;

const Caption = styled.div`
  align-items: center;
  text-align: center;
  font-size: 20px;
  line-height: 28px;
  font-weight: 600;
  margin-bottom: 24px;
  color: #262626;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px;
  width: 100%;
  max-width: 600px;
  background-color: #ffffff;
  border-radius: 2px;
`;

const Label = styled.div`
  font-size: 14px;
  line-height: 22px;
  text-align: left;
  margin-bottom: 8px;
  color: #595959;
`;

const Box = styled.div<{ type?: "fio" | "birthday" }>`
  display: grid;
  grid-template-columns: ${({ type }) => (type === "fio" ? " 1fr 1fr" : "1fr 1fr 1fr")};
  grid-gap: 24px;
`;
