import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../core/redux/store";

export const getSeekersSelector = createSelector(
  (state: RootState) => state.addSeeker,
  (state) => state,
);
export const getCurrentTabSelector = createSelector(
  (state: RootState) => state.rememberTab,
  (state) => state,
);
