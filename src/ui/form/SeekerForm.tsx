import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import { Button } from "../../common/ui/button/Button";
import { AddSeekerProps } from "../../modules/seekers/interfaces/seekerInterfaces";
import { addSeeker } from "../../modules/seekers/slice";
import { CustomInput } from "../input/Input";
import { gender, IOption, months, years } from "../select/data";
import { CustomSelect } from "../select/Select";

interface Props {
  onClick?: () => void;
  visible?: boolean;
}
export const SeekerForm = ({ visible, onClick }: Props) => {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    control,
    getValues,
    handleSubmit,
    reset,
  } = useForm<AddSeekerProps>();

  const day = getValues("day");
  const phoneNumber = getValues("number");

  useEffect(() => {
    return () => {
      reset();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  const onSubmit = (data: AddSeekerProps) => {
    if (Object.keys(errors).length === 0) {
      data.id = uuidv4();
      dispatch(addSeeker(data));
      onClick?.();
    }
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormHeader>
        <Title>Пригласить соискателя</Title>
      </FormHeader>
      <FormContainer>
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
        <Label>Дата рождения</Label>
        <Box>
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

        <CustomInput
          type="tel"
          placeholder="Телефон (опционально)"
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
              error={errors.gender && errors.gender.type === "required" ? "Обязательное поле" : ""}
            />
          )}
        />
      </FormContainer>
      <ButtonsLine>
        <Button
          style={{ marginRight: `8px` }}
          styleType="secondary"
          type="button"
          onClick={onClick}
        >
          Отмена
        </Button>
        <Button type="submit">Пригласить</Button>
      </ButtonsLine>
    </Form>
  );
};

const Form = styled.form``;

const FormHeader = styled.div`
  padding: 16px 30px;
  box-shadow: inset 0px -1px 0px #d9d9d9;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #262626;
`;
const FormContainer = styled.div`
  padding: 24px 30px;
`;

const Label = styled.div`
  text-align: left;
  font-size: 14px;
  line-height: 22px;
  color: #595959;
  margin-bottom: 8px;
`;

const Box = styled.div`
  display: grid;
  grid-template-columns: 74px 1fr 100px;
  grid-gap: 16px;
`;

const ButtonsLine = styled.div`
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
