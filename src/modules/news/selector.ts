import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../core/redux/store";

export const getNewsSelector = createSelector(
  (state: RootState) => state.news.news,
  (state) => state,
);
