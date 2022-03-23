import { combineReducers } from "@reduxjs/toolkit";

import {
  rememberEmailReducer,
  signInReducer,
  signUpReducer,
} from "../../modules/authorisation/slice";
import { addSeekerReducer } from "../../modules/seekers/slice";

export const rootReducer = combineReducers({
  signIn: signInReducer,
  signUp: signUpReducer,
  rememberEmail: rememberEmailReducer,
  addSeeker: addSeekerReducer,
});
