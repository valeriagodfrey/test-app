import { combineReducers } from "@reduxjs/toolkit";

import {
  rememberEmailReducer,
  signInReducer,
  signUpReducer,
} from "../../modules/authorisation/slice";
import { addEmployeeReducer, allListReducer } from "../../modules/employee/slice";
import { addSeekerReducer, rememberTabReducer } from "../../modules/seekers/slice";

export const rootReducer = combineReducers({
  signIn: signInReducer,
  signUp: signUpReducer,
  rememberEmail: rememberEmailReducer,
  addSeeker: addSeekerReducer,
  addEmployee: addEmployeeReducer,
  rememberTab: rememberTabReducer,
  allList: allListReducer,
});
