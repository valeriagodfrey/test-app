import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../core/redux/store";

export const getSeekersSelector = createSelector(
  (state: RootState) => state.addSeeker,
  (state) => state,
);
