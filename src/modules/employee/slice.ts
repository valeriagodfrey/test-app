import { createSlice } from "@reduxjs/toolkit";

import { AddEmployeeProps } from "./interfaces/employeeInterfaces";

interface Employee {
  list: AddEmployeeProps[];
}

const initialStateAddEmployee: Employee = {
  list: [],
};

export const addEmployeeSlice = createSlice({
  name: "addEmployee",
  initialState: initialStateAddEmployee,
  reducers: {
    addEmployee: (state, action) => {
      return { ...state, list: [...state.list, action.payload] };
    },
    clearList: (state) => {
      return { ...state, list: [] };
    },
    deleteEmployee: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addEmployee, clearList, deleteEmployee } = addEmployeeSlice.actions;

export const { reducer: addEmployeeReducer } = addEmployeeSlice;
