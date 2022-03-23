import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../core/redux/store";

export const getEmailSelector = createSelector(
  (state: RootState) => state.rememberEmail,
  (state) => state,
);

export const getUsersSelector = createSelector(
  (state: RootState) => state.signUp,
  (state) => state,
);

export const getCurrentUserSelector = createSelector(
  (state: RootState) => state.signIn.user,
  (state) => state,
);
