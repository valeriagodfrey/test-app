import { createSlice } from "@reduxjs/toolkit";

import { AddSeekerProps } from "./interfaces/seekerInterfaces";

interface Seekers {
  list: AddSeekerProps[];
}

const initialStateAddSeeker: Seekers = {
  list: [],
};

export const addSeekerSlice = createSlice({
  name: "addSeeker",
  initialState: initialStateAddSeeker,
  reducers: {
    addSeeker: (state, action) => {
      return { ...state, list: [...state.list, action.payload] };
    },
    clearList: (state) => {
      return { ...state, list: [] };
    },
    deleteSeeker: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
  },
});

export const rememberTabSlice = createSlice({
  name: "rememberTab",
  initialState: { currentTab: "" },
  reducers: {
    rememberTab: (state, action) => {
      state.currentTab = action.payload;
    },
  },
});

export const { addSeeker, clearList, deleteSeeker } = addSeekerSlice.actions;
export const { rememberTab } = rememberTabSlice.actions;

export const { reducer: rememberTabReducer } = rememberTabSlice;
export const { reducer: addSeekerReducer } = addSeekerSlice;
