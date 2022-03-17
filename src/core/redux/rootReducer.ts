import { combineReducers } from "@reduxjs/toolkit";

import { rememberEmailReducer, signInReducer, signUpReducer } from "../../features/user";

export const rootReducer = combineReducers({
  signIn: signInReducer,
  signUp: signUpReducer,
  rememberEmail: rememberEmailReducer,
});
