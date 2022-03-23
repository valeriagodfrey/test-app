import { createSlice } from "@reduxjs/toolkit";

import { AddSeekerProps } from "../../ui/drawer/Drawer";

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

export const { addSeeker, clearList, deleteSeeker } = addSeekerSlice.actions;

export const { reducer: addSeekerReducer } = addSeekerSlice;
