import React from "react";

export const ChangePasswordForm = () => {
  return <div>ChangePasswordForm</div>;
};
// import React from "react";
// import { Controller, useForm } from "react-hook-form";
// import { useTranslation } from "react-i18next";
// import { useDispatch } from "react-redux";
// import styled from "styled-components";
// import { v4 as uuidv4 } from "uuid";

// import { AddEmployeeProps } from "../../modules/employee/interfaces/employeeInterfaces";
// import { addEmployee } from "../../modules/employee/slice";
// import { Button } from "../button/Button";
// import { CustomInput } from "../input/Input";
// import { gender, IOption, months, years } from "../select/data";
// import { CustomSelect } from "../select/Select";

// interface Props {
//   onClick?: () => void;
// }
// interface ChangePasswordProps {
//   oldPassword: string;
//   newPassword: string;
//   newPassword2: string;
// }

// export const ChangePasswordForm = ({ onClick }: Props) => {
//   const dispatch = useDispatch();
//   const { t } = useTranslation();

//   const {
//     register,
//     formState: { errors },
//     control,
//     getValues,
//     handleSubmit,
//   } = useForm<ChangePasswordProps>();

//   const onSubmit = (data: ChangePasswordProps) => {
//     if (Object.keys(errors).length === 0) {
//       dispatch(addEmployee(data));
//       onClick?.();
//     }
//   };
//   return (
//     <Form onSubmit={handleSubmit(onSubmit)}>
//       <FormHeader>
//         <Title>Смена пароля</Title>
//       </FormHeader>
//       <FormContainer>
//         <CustomInput
//           type="password"
//           withLabel
//           label={t("passwordInput")}
//           {...register("password", {
//             required: true,
//             validate: () => getValues("password").length >= 8 && getValues("password").length <= 64,
//           })}
//           error={
//             errors.email?.type === "required"
//               ? `${t("requiredField")}`
//               : errors.password?.type === "validate"
//               ? `${t("passwordValidation")}`
//               : ""
//           }
//         />
//         <CustomInput
//           type="password"
//           withLabel
//           label={t("passwordInput")}
//           {...register("password", {
//             required: true,
//             validate: () => getValues("password").length >= 8 && getValues("password").length <= 64,
//           })}
//           error={
//             errors.email?.type === "required"
//               ? `${t("requiredField")}`
//               : errors.password?.type === "validate"
//               ? `${t("passwordValidation")}`
//               : ""
//           }
//         />
//         <CustomInput
//           type="password"
//           withLabel
//           label={t("passwordInput")}
//           {...register("password", {
//             required: true,
//             validate: () => getValues("password").length >= 8 && getValues("password").length <= 64,
//           })}
//           error={
//             errors.email?.type === "required"
//               ? `${t("requiredField")}`
//               : errors.password?.type === "validate"
//               ? `${t("passwordValidation")}`
//               : ""
//           }
//         />
//       </FormContainer>
//       <ButtonsLine>
//         <Button
//           style={{ marginRight: `8px` }}
//           styleType="secondary"
//           type="button"
//           onClick={onClick}
//         >
//           Отмена
//         </Button>
//         <Button type="submit">Пригласить</Button>
//       </ButtonsLine>
//     </Form>
//   );
// };

// const Form = styled.form``;

// const FormHeader = styled.div`
//   padding: 16px 30px;
//   box-shadow: inset 0px -1px 0px #d9d9d9;
// `;

// const Title = styled.div`
//   font-weight: 600;
//   font-size: 16px;
//   line-height: 24px;
//   color: #262626;
// `;
// const FormContainer = styled.div`
//   padding: 24px 30px;
// `;

// const Label = styled.div`
//   text-align: left;
//   font-size: 14px;
//   line-height: 22px;
//   color: #595959;
//   margin-bottom: 8px;
// `;

// const Box = styled.div`
//   display: grid;
//   grid-template-columns: 74px 1fr 100px;
//   grid-gap: 16px;
// `;

// const ButtonsLine = styled.div`
//   padding: 10px 16px;
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
// `;
