import { configureStore } from "@reduxjs/toolkit";

import { signInReducer, signUpReducer } from "../../features/user";

export const store = configureStore({
  reducer: {
    signIn: signInReducer,
    signUp: signUpReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
