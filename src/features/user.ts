import { createSlice } from "@reduxjs/toolkit";

const initialStateSignIn = {
  value: { email: "", password: "" },
};

const initialStateSignUp = {
  value: {
    email: "",
    name: "",
    patronymic: "",
    surname: "",
    password: "",
    password2: "",
    day: 0,
    month: "",
    year: 0,
    number: 0,
    gender: "",
    check: false,
  },
};
export const signInSlice = createSlice({
  name: "signIn",
  initialState: initialStateSignIn,
  reducers: {
    signIn: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const signUpSlice = createSlice({
  name: "signUp",
  initialState: initialStateSignUp,
  reducers: {
    signUp: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { signIn } = signInSlice.actions;
export const { signUp } = signUpSlice.actions;

export const { reducer: signInReducer } = signInSlice;
export const { reducer: signUpReducer } = signUpSlice;
