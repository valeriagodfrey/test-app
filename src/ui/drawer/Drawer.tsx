import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";

import { addSeeker } from "../../features/user";
import { Button } from "../button/Button";
import { CustomInput } from "../input/Input";
import { gender, IOption, months, years } from "../select/data";
import { CustomSelect } from "../select/Select";

export interface AddSeekerProps {
  email: string;
  surname: string;
  name: string;
  patronymic: string;
  day: number;
  month: string;
  year: number;
  number: number;
  gender: string;
  position: string;
}
interface Props {
  visible?: boolean;
  onClick?: () => void;
  type?: "seeker" | "employeer";
}

export const Drawer = ({ visible, onClick, type }: Props) => {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    control,
    getValues,
    handleSubmit,
  } = useForm<AddSeekerProps>();

  const day = getValues("day");
  const phoneNumber = getValues("number");

  const onSubmit = (data: AddSeekerProps) => {
    dispatch(addSeeker(data));
  };

  return (
    <Container>
      <CSSTransition in={visible} timeout={300} classNames="drawer-menu" unmountOnExit>
        <Menu visible={visible}>
          {type === "seeker" ? (
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
                        error={
                          errors.month && errors.month?.type === "required"
                            ? "Обязательное поле"
                            : ""
                        }
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
                        error={
                          errors.year && errors.year?.type === "required" ? "Обязательное поле" : ""
                        }
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
                      error={
                        errors.gender && errors.gender.type === "required"
                          ? "Обязательное поле"
                          : ""
                      }
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
                <Button onClick={onClick}>Пригласить</Button>
              </ButtonsLine>
            </Form>
          ) : (
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FormHeader>
                <Title>Пригласить сотрудника</Title>
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
                <CustomInput
                  placeholder="Должность"
                  {...register("position", { required: true })}
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
                        error={
                          errors.month && errors.month?.type === "required"
                            ? "Обязательное поле"
                            : ""
                        }
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
                        error={
                          errors.year && errors.year?.type === "required" ? "Обязательное поле" : ""
                        }
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
                      error={
                        errors.gender && errors.gender.type === "required"
                          ? "Обязательное поле"
                          : ""
                      }
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
                <Button onClick={onClick}>Пригласить</Button>
              </ButtonsLine>
            </Form>
          )}
        </Menu>
      </CSSTransition>

      <CSSTransition in={visible} timeout={300} classNames="drawer-area" unmountOnExit>
        <Area onClick={onClick} />
      </CSSTransition>
    </Container>
  );
};
const Container = styled.div<{ visible?: boolean }>`
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;
  max-height: 807px;

  .drawer-menu-enter {
    transform: translateX(100%);
  }

  .drawer-menu-active {
    transform: translateX(0);
    transition: transform 300ms;
  }

  .drawer-menu-exit {
    transform: translateX(0);
  }

  .drawer-menu-exit-active {
    transform: translateX(100%);
    transition: transform 300ms;
  }

  .drawer-area-enter {
    opacity: 0;
  }

  .drawer-area-active {
    opacity: 0.6;
    transition: opacity 300ms;
  }

  .drawer-area-exit {
    opacity: 0.6;
  }

  .drawer-area-exit-active {
    opacity: 0;
    transition: opacity 300ms;
  }

  .drawer-area-enter-done {
    opacity: 0.6;
  }
`;

const Menu = styled.div<{ visible?: boolean }>`
  background-color: white;
  transition: all 0.5s ease-in-out;
  max-width: 444px;
  display: flex;
  flex-direction: column;
`;

const Area = styled.div`
  background: grey;
  z-index: -1;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

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
