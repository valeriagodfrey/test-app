import { createSlice } from "@reduxjs/toolkit";

import { RegisterProps } from "../pages/registration";
import { AddSeekerProps } from "../ui/drawer/Drawer";

const initialStateSignIn = {
  user: { email: "", password: "" },
};

interface Users {
  list: RegisterProps[];
}
interface Seekers {
  list: AddSeekerProps[];
}

const initialStateSignUp: Users = {
  list: [],
};

const initialStateAddSeeker: Seekers = {
  list: [],
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

export const addSeekerSlice = createSlice({
  name: "addSeeker",
  initialState: initialStateAddSeeker,
  reducers: {
    addSeeker: (state, action) => {
      return { ...state, list: [...state.list, action.payload] };
    },
    clearList: (state) => {
      return { ...state, list: [] };
    },
    deleteSeeker: (state, action) => {
      return { ...state, list: [...state.list, action.payload] };
    },
  },
});

export const { signIn } = signInSlice.actions;
export const { signUp } = signUpSlice.actions;
export const { rememberEmail } = rememberEmailSlice.actions;
export const { addSeeker } = addSeekerSlice.actions;
export const { clearList } = addSeekerSlice.actions;

export const { reducer: signInReducer } = signInSlice;
export const { reducer: signUpReducer } = signUpSlice;
export const { reducer: rememberEmailReducer } = rememberEmailSlice;
export const { reducer: addSeekerReducer } = addSeekerSlice;
