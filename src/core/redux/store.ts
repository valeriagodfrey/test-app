import { configureStore } from "@reduxjs/toolkit";

import { changePasswordReducer, signInReducer, signUpReducer } from "../../features/user";

export const store = configureStore({
  reducer: {
    signIn: signInReducer,
    signUp: signUpReducer,
    changePassword: changePasswordReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
