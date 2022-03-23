import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../core/redux/store";

export const getEmployeeSelector = createSelector(
  (state: RootState) => state.addEmployee,
  (state) => state,
);
