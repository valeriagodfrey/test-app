import { createSlice } from "@reduxjs/toolkit";

import { RegisterProps } from "../pages/registration";

const initialStateSignIn = {
  user: { email: "", password: "" },
};

interface Users {
  list: RegisterProps[];
}

const initialStateSignUp: Users = {
  list: [
    {
      email: "test@gmail.com",
      name: "Ivan",
      patronymic: "Ivanovich",
      surname: "Ivanov",
      password: "123456789",
      password2: "123456789",
      day: 1,
      month: "Март",
      year: 1985,
      gender: "Мужчина",
      number: 992093423,
      check: true,
    },
  ],
};

export const signInSlice = createSlice({
  name: "signIn",
  initialState: initialStateSignIn,
  reducers: {
    signIn: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const signUpSlice = createSlice({
  name: "signUp",
  initialState: initialStateSignUp,
  reducers: {
    signUp: (state, action) => {
      return { ...state, list: [...state.list, action.payload] };
    },
  },
});

export const rememberEmailSlice = createSlice({
  name: "rememberEmail",
  initialState: { email: "" },
  reducers: {
    rememberEmail: (state, action) => (state.email = action.payload),
  },
});

export const { signIn } = signInSlice.actions;
export const { signUp } = signUpSlice.actions;
export const { rememberEmail } = rememberEmailSlice.actions;

export const { reducer: signInReducer } = signInSlice;
export const { reducer: signUpReducer } = signUpSlice;
export const { reducer: rememberEmailReducer } = rememberEmailSlice;
