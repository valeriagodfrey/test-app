import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";

import { changePassword, signOut } from "../../../modules/authorisation/slice";
import { Button } from "../button/Button";
import { CustomInput } from "../input/Input";

interface Props {
  onClick?: () => void;
  visible?: boolean;
}
interface ChangePasswordProps {
  oldPassword: string;
  newPassword: string;
  newPassword2: string;
}

export const ChangePasswordForm = ({ onClick, visible }: Props) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
    reset,
  } = useForm<ChangePasswordProps>();

  useEffect(() => {
    return () => {
      reset();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  const onSubmit = (data: ChangePasswordProps) => {
    if (Object.keys(errors).length === 0) {
      dispatch(changePassword({ oldPassword: data.oldPassword, newPassword: data.newPassword }));
      onClick?.();
      toast.success("Пароль успешно изменен");
      dispatch(signOut());
      navigate("/authorization");
    }
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormHeader>
        <Title>Смена пароля</Title>
      </FormHeader>
      <FormContainer>
        <CustomInput
          type="password"
          withLabel
          label="Старый пароль"
          {...register("oldPassword", {
            required: true,
            validate: () =>
              getValues("oldPassword").length >= 8 && getValues("oldPassword").length <= 64,
          })}
          error={
            errors.oldPassword?.type === "required"
              ? `${t("requiredField")}`
              : errors.oldPassword?.type === "validate"
              ? `${t("passwordValidation")}`
              : ""
          }
        />
        <CustomInput
          type="password"
          withLabel
          label="Новый пароль"
          {...register("newPassword", {
            required: true,
            validate: () =>
              getValues("newPassword").length >= 8 && getValues("newPassword").length <= 64,
          })}
          error={
            errors.newPassword?.type === "required"
              ? `${t("requiredField")}`
              : errors.newPassword?.type === "validate"
              ? `${t("passwordValidation")}`
              : ""
          }
        />
        <CustomInput
          type="password"
          withLabel
          label="Подтверждение нового пароля"
          {...register("newPassword2", {
            required: true,
            validate: () => getValues("newPassword2") === getValues("newPassword"),
          })}
          error={
            errors.newPassword2?.type === "required"
              ? `${t("requiredField")}`
              : errors.newPassword2?.type === "validate"
              ? `${t("passwordValidation")}`
              : ""
          }
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
        <Button type="submit">Изменить пароль</Button>
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

const ButtonsLine = styled.div`
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
