import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../core/redux/store";

export const getUsersSelector = createSelector(
  (state: RootState) => state.signUp.list,
  (state) => state,
);
export const getEmailSelector = createSelector(
  (state: RootState) => state.rememberEmail,
  (state) => state,
);
