import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { media } from "../assets/media";
import { signUp } from "../features/user";
import { Button } from "../ui/button/Button";
import { Checkbox } from "../ui/checkbox/Checkbox";
import { CustomInput } from "../ui/input/Input";
import { ILink } from "../ui/link/Link";
import { gender, IOption, months, years } from "../ui/select/data";
import { CustomSelect } from "../ui/select/Select";

export interface RegisterProps {
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
  check: boolean;
}

export const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    control,
    getValues,
    handleSubmit,
  } = useForm<RegisterProps>();

  const day = getValues("day");
  const phoneNumber = getValues("number");

  const onSubmit = (data: RegisterProps) => {
    dispatch(signUp(data));
    setTimeout(() => {
      navigate("/home");
    }, 1000);
  };

  return (
    <WrapperContainer>
      <Title>StaffPro</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Caption>Зарегистрируйтесь</Caption>
        <CustomInput
          type="email"
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
          placeholder="Пароль"
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
        <Label position="left">Дата рождения</Label>
        <Box type="birthday">
          <CustomInput
            placeholder="День"
            {...register("day", { required: true })}
            error={
              errors.number && errors.day?.type === "required"
                ? "Обязательное поле"
                : errors.number && (Number(day) >= 32 || Number(day) < 1)
                ? "Введите верное число"
                : ""
            }
          />
          <Controller
            name="month"
            control={control}
            rules={{ required: true }}
            render={(props) => (
              <CustomSelect
                placeholder="Месяц"
                options={months}
                value={(months || []).filter((i) => i.value === props.field.value)[0]}
                onChange={(value) => props.field.onChange((value as IOption).value)}
                error={errors.month && errors.month?.type === "required" ? "Обязательное поле" : ""}
              />
            )}
          />
          <Controller
            name="year"
            control={control}
            rules={{ required: true }}
            render={(props) => (
              <CustomSelect
                placeholder="Год"
                options={years}
                value={(years || []).filter((i) => i.value === props.field.value)[0]}
                onChange={(value) => props.field.onChange((value as IOption).value)}
                error={errors.year && errors.year?.type === "required" ? "Обязательное поле" : ""}
              />
            )}
          />
        </Box>
        <Box>
          <CustomInput
            type="tel"
            placeholder="Телефон"
            {...register("number", {
              required: true,
              maxLength: 10,
              minLength: 10,
            })}
            error={
              errors.number &&
              (errors.number?.type === "required" ||
                String(phoneNumber).length > 10 ||
                String(phoneNumber).length < 10)
                ? "Такого номера не существует"
                : ""
            }
          />
          <Controller
            name="gender"
            control={control}
            rules={{ required: true }}
            render={(props) => (
              <CustomSelect
                placeholder="Пол"
                options={gender}
                value={(gender || []).filter((i) => i.value === props.field.value)[0]}
                onChange={(value) => props.field.onChange((value as IOption).value)}
                error={
                  errors.gender && errors.gender.type === "required" ? "Обязательное поле" : ""
                }
              />
            )}
          />
        </Box>
        <Controller
          name="check"
          control={control}
          render={(props) => (
            <Checkbox
              {...register("check", { required: true })}
              {...props}
              checked={props.field.value}
              onChange={(value) => {
                value = !props.field.value;
                props.field.onChange(value);
              }}
              error={
                errors.check?.type === "required"
                  ? "Для регистрации необходимо принять условия соглашения"
                  : ""
              }
            >
              Я согласен с <ILink to="/agreement"> пользовательским соглашением</ILink> и
              <ILink to="/politics"> политикой обработки персональных данных пользователей</ILink>
            </Checkbox>
          )}
        />
        <Button size="big">Создать аккаунт</Button>
        <Label position="center">
          Уже есть аккаунт? <ILink to="/authorization">Войдите</ILink>
        </Label>
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
  padding: 30px;
  max-width: 600px;
  background-color: #ffffff;
  border-radius: 2px;
  ${media.desktop} {
    padding: 24px;
  }
`;

const Label = styled.div<{ position?: "left" | "center" }>`
  font-size: 14px;
  line-height: 22px;
  text-align: ${({ position }) => (position === "left" ? "left" : "center")};
  margin: ${({ position }) => (position === "left" ? "0px 0px 9px" : "24px 0px 0px")};

  color: #595959;
`;

const Box = styled.div<{ type?: "fio" | "birthday" }>`
  display: grid;
  grid-template-columns: 1fr;
  ${media.desktop} {
    grid-template-columns: ${({ type }) =>
      type === "fio" ? " 1fr 1fr" : type === "birthday" ? "170px 1fr 155px" : "349px 1fr"};
    grid-gap: 24px;
  }
`;
