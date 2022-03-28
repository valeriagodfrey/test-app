import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import { media } from "../assets/media";
import { Button } from "../common/ui/button/Button";
import { Checkbox } from "../common/ui/checkbox/Checkbox";
import { CustomInput } from "../common/ui/input/Input";
import { ILink } from "../common/ui/link/Link";
import { gender, IOption, months, years } from "../common/ui/select/data";
import { CustomSelect } from "../common/ui/select/Select";
import { store } from "../core/redux/store";
import { signUp } from "../modules/authorisation/slice";

export interface RegisterProps {
  id: string;
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
  const { t } = useTranslation();
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
    data.id = uuidv4();
    dispatch(signUp(data));
    setTimeout(() => {
      navigate("/home");
    }, 1000);
  };
  // eslint-disable-next-line no-console
  console.log(store.getState().signUp);

  return (
    <WrapperContainer>
      <Title>StaffPro</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Caption>{t("registerPage.titleRegister")}</Caption>
        <CustomInput
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
          error={errors.email?.type === "required" ? `${t("requiredField")}` : ""}
        />
        <CustomInput
          placeholder={t("registerPage.surname")}
          {...register("surname", { required: true })}
          error={errors.surname?.type === "required" ? `${t("requiredField")}` : ""}
        />
        <Box type="fio">
          <CustomInput
            placeholder={t("registerPage.name")}
            {...register("name", { required: true })}
            error={errors.name?.type === "required" ? `${t("requiredField")}` : ""}
          />
          <CustomInput
            placeholder={t("registerPage.patronymic")}
            {...register("patronymic", { required: true })}
            error={errors.patronymic?.type === "required" ? `${t("requiredField")}` : ""}
          />
        </Box>
        <CustomInput
          type="password"
          placeholder={t("passwordInput")}
          {...register("password", {
            required: true,
            validate: () => getValues("password").length >= 8 && getValues("password").length <= 64,
          })}
          error={
            errors.password?.type === "required"
              ? `${t("requiredField")}`
              : errors.password?.type === "validate"
              ? `${t("passwordValidation")}`
              : ""
          }
        />
        <CustomInput
          type="password"
          placeholder={t("passwordInput")}
          {...register("password2", {
            required: true,

            validate: () => getValues("password2") === getValues("password"),
          })}
          error={
            errors.password2?.type === "required"
              ? `${t("requiredField")}`
              : errors.password2?.type === "validate"
              ? "Пароли не совпадают"
              : ""
          }
        />
        <Label position="left">{t("registerPage.birthday")}</Label>
        <Box type="birthday">
          <CustomInput
            placeholder={t("registerPage.day")}
            {...register("day", { required: true })}
            error={
              errors.number && errors.day?.type === "required"
                ? `${t("requiredField")}`
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
                placeholder={t("registerPage.month")}
                options={months}
                value={(months || []).filter((i) => i.value === props.field.value)[0]}
                onChange={(value) => props.field.onChange((value as IOption).value)}
                error={
                  errors.month && errors.month?.type === "required" ? `${t("requiredField")}` : ""
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
                placeholder={t("registerPage.year")}
                options={years}
                value={(years || []).filter((i) => i.value === props.field.value)[0]}
                onChange={(value) => props.field.onChange((value as IOption).value)}
                error={
                  errors.year && errors.year?.type === "required" ? `${t("requiredField")}` : ""
                }
              />
            )}
          />
        </Box>
        <Box>
          <CustomInput
            type="tel"
            placeholder={t("registerPage.phoneNumber")}
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
                ? `${t("registerPage.numberValidation")}`
                : ""
            }
          />
          <Controller
            name="gender"
            control={control}
            rules={{ required: true }}
            render={(props) => (
              <CustomSelect
                placeholder={t("registerPage.gender")}
                options={gender}
                value={(gender || []).filter((i) => i.value === props.field.value)[0]}
                onChange={(value) => props.field.onChange((value as IOption).value)}
                error={
                  errors.gender && errors.gender.type === "required" ? `${t("requiredField")}` : ""
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
              type="reg"
              {...register("check", { required: true })}
              {...props}
              checked={props.field.value}
              onChange={(value) => {
                value = !props.field.value;
                props.field.onChange(value);
              }}
              error={
                errors.check?.type === "required" ? `${t("registerPage.agreementValidation")}` : ""
              }
            >
              {t("registerPage.agreementPart1")}
              <ILink to="/agreement"> {t("registerPage.agreementLink1")}</ILink>
              {t("registerPage.agreementPart2")}
              <ILink to="/politics"> {t("registerPage.agreementLink2")}</ILink>
            </Checkbox>
          )}
        />
        <Button size="big">{t("registerPage.signUpButton")}</Button>
        <Label position="center">
          {t("registerPage.haveAccount")}
          <ILink to="/authorization"> {t("signIn")}</ILink>
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
