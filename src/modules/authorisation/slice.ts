import { createSlice } from "@reduxjs/toolkit";

import { RegisterProps } from "../../pages/registration";

interface Users {
  list: RegisterProps[];
}

const initialStateSignIn = {
  user: { email: "", password: "" },
};

const initialStateSignUp: Users = {
  list: [],
};

export const signInSlice = createSlice({
  name: "signIn",
  initialState: initialStateSignIn,
  reducers: {
    signIn: (state, action) => {
      state.user = action.payload;
    },
    signOut: (state) => {
      state.user.email = "";
      state.user.password = "";
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
    deleteUser: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
    passwordRecovery: (state, action) => {
      state.list = state.list.map((item) => {
        item.password =
          item.email === action.payload.email ? action.payload.password : item.password;
        item.password2 = item.password;
        return item;
      });
    },
  },
});

export const rememberEmailSlice = createSlice({
  name: "rememberEmail",
  initialState: { email: "" },
  reducers: {
    rememberEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { signIn, signOut } = signInSlice.actions;
export const { signUp, deleteUser, passwordRecovery } = signUpSlice.actions;
export const { rememberEmail } = rememberEmailSlice.actions;

export const { reducer: signInReducer } = signInSlice;
export const { reducer: signUpReducer } = signUpSlice;
export const { reducer: rememberEmailReducer } = rememberEmailSlice;
