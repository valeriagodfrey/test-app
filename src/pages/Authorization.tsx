import "../core/i18n/i18n";

import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";

import signInImage from "../assets/images/signIn.png";
import { Button } from "../common/ui/button/Button";
import { Checkbox } from "../common/ui/checkbox/Checkbox";
import { Header } from "../common/ui/header/Header";
import { CustomInput } from "../common/ui/input/Input";
import { ILink } from "../common/ui/link/Link";
import { getUsersSelector } from "../modules/authorisation/selectors";
import { signIn } from "../modules/authorisation/slice";
import { store } from "../core/redux/store";

export interface AuthProps {
  email: string;
  password: string;
  check?: boolean;
}

export const Authorization = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    control,
    getValues,
    handleSubmit,
  } = useForm<AuthProps>();

  const users = useSelector(getUsersSelector);

  const handleAuth = (user: AuthProps) => {
    const currentUser = user;
    const regUser = users.list.find((item) => item.email === currentUser.email);
    if (currentUser.email === regUser?.email && currentUser.password === regUser?.password) {
      setTimeout(() => {
        navigate("/home");
      }, 500);
    } else toast.error("Пользователь с таким эл. адресом и паролем не найден.");
  };

  const onSubmit = (data: AuthProps) => {
    dispatch(signIn(data));
    handleAuth(data);
  };
  console.log(store.getState().signIn);
  return (
    <Container>
      <Header />
      <Main>
        <Sidebar>
          <Box>
            <Label>Staff Pro</Label>
            <Title place="sidebar">{t("authPage.titleAuth")}</Title>
          </Box>
          <Img src={signInImage} alt="signIn" />
        </Sidebar>
        <Content>
          <HeaderLine>
            <SignUp>
              {t("authPage.noAcc")}
              <ILink to="/registration"> {t("signUp")}</ILink>
            </SignUp>
          </HeaderLine>
          <SignInContainer>
            <SignInForm onSubmit={handleSubmit(onSubmit)}>
              <Title place="content">{t("authPage.loginStaffPro")}</Title>
              <CustomInput
                type="email"
                withLabel
                label={t("authPage.emailInput")}
                {...register("email", { required: true })}
                error={errors.email?.type === "required" ? `${t("requiredField")}` : ""}
              />
              <CustomInput
                type="password"
                withLabel
                label={t("passwordInput")}
                {...register("password", {
                  required: true,
                  validate: () =>
                    getValues("password").length >= 8 && getValues("password").length <= 64,
                })}
                error={
                  errors.email?.type === "required"
                    ? `${t("requiredField")}`
                    : errors.password?.type === "validate"
                    ? `${t("passwordValidation")}`
                    : ""
                }
              />
              <Line>
                <Controller
                  name="check"
                  control={control}
                  render={(props) => (
                    <Checkbox
                      {...register("check")}
                      {...props}
                      checked={props.field.value}
                      onChange={(value) => {
                        value = !props.field.value;
                        props.field.onChange(value);
                      }}
                    >
                      {t("authPage.rememberMe")}
                    </Checkbox>
                  )}
                />
                <ILink to="/forgot_password">{t("authPage.forgotPassword")}</ILink>
              </Line>
              <Button size="big">{t("signIn")}</Button>
            </SignInForm>
          </SignInContainer>
        </Content>
      </Main>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const Main = styled.div`
  padding-top: 64px;
  display: grid;
  grid-template-columns: 493px 1fr;
  height: calc(100vh - 64px);
`;

const Sidebar = styled.div`
  background: #1890ff;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Content = styled.div`
  display: grid;
  grid-template-rows: 64px 1fr;
`;

const Img = styled.img`
  width: 413px;
`;

const SignUp = styled.div`
  font-size: 16px;
  line-height: 24px;
`;

const HeaderLine = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px 24px 20px;
`;

const Label = styled.div`
  font-size: 20px;
  line-height: 28px;
  color: #ffffff;
`;

const Title = styled.div<{ place: "sidebar" | "content" }>`
  font-weight: 600;
  font-size: ${({ place }) => (place === "sidebar" ? "38px" : "30px")};
  line-height: ${({ place }) => (place === "sidebar" ? "46px" : "38px")};
  color: ${({ place }) => (place === "sidebar" ? "#ffffff" : "#262626")};
  margin-bottom: 24px;
`;

const Box = styled.div`
  width: 100%;
`;

const SignInContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 24px;
`;

const SignInForm = styled.form`
  width: 464px;
`;

const Line = styled.div`
  display: flex;
  justify-content: space-between;
`;
