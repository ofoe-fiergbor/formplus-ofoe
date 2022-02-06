import { createSlice } from "@reduxjs/toolkit";
import { categories, sortingOrder } from "../../constants/optionsTypes";

const initialState = {
  templates: undefined,
  searchedTemplate: undefined,
  categorySortedTemplates: undefined,
  currentCategory: categories.all,
  dateSort: sortingOrder.default,
  orderSort: sortingOrder.default,
};

const templateSlice = createSlice({
  name: "templates",
  initialState,
  reducers: {
    setTemplates: (state, action) => {
      state.templates = action.payload;
    },
    searchTemplate: (state, action) => {
      state.searchedTemplate = [...state.templates].filter((val) =>
        val.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    sortByCategory: (state, action) => {
      if (action.payload === categories.all) {
        state.categorySortedTemplates = undefined;
      } else {
        state.categorySortedTemplates = [...state.templates].filter((e) =>
          e.category.find((c) => c === action.payload)
        );
      }
      state.currentCategory = action.payload;
    },
    sortByDate: (state, action) => {
      state.dateSort = action.payload;
    },
    sortInOrder: (state, action) => {
      state.orderSort = action.payload;
    },
  },
});

export const {
  setTemplates,
  searchTemplate,
  sortByCategory,
  sortByDate,
  sortInOrder,
} = templateSlice.actions;

export default templateSlice.reducer;
