import { configureStore } from "@reduxjs/toolkit";

import { rememberEmailReducer, signInReducer, signUpReducer } from "../../features/user";

export const store = configureStore({
  reducer: {
    signIn: signInReducer,
    signUp: signUpReducer,
    rememberEmail: rememberEmailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
