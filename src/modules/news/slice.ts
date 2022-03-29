import { createSlice } from "@reduxjs/toolkit";

import { NewsProps } from "../../common/ui/form/AddNewsForm";

const initialStateNews: NewsProps = {
  news: [{ id: "", title: "", description: "" }],
};

export const newsSlice = createSlice({
  name: "news",
  initialState: initialStateNews,
  reducers: {
    addNews: (state, action) => {
      state.news = state.news.concat(action.payload);
    },
    deleteNews: (state, action) => {
      state.news = state.news.filter((item) => item.id !== action.payload);
    },
    deleteAll: (state) => {
      state.news = [];
    },
  },
});

export const { addNews, deleteNews, deleteAll } = newsSlice.actions;

export const { reducer: newsReducer } = newsSlice;
