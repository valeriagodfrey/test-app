import { createSlice } from "@reduxjs/toolkit";

import { RegisterProps } from "../pages/registration";

const initialStateSignIn = {
  value: { email: "", password: "" },
};
interface Users {
  list: RegisterProps[];
}

const initialStateSignUp: Users = {
  list: [],
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
      state.list.push(action.payload);
    },
  },
});

export const { signIn } = signInSlice.actions;
export const { signUp } = signUpSlice.actions;

export const { reducer: signInReducer } = signInSlice;
export const { reducer: signUpReducer } = signUpSlice;
