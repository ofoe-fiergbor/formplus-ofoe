import { createSlice } from "@reduxjs/toolkit";
import { categories, sortingOrder } from "../../constants/optionsTypes";

const initialState = {
  isLoading: false,
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
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setTemplates: (state, action) => {
      state.templates = action.payload;
    },
    searchTemplate: (state, action) => {
      state.searchedTemplate = state.templates.filter((val) =>
        val.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    sortByCategory: (state, action) => {
      if (action.payload === categories.all) {
        state.categorySortedTemplates = undefined;
      } else {
        state.categorySortedTemplates = state.templates.filter((e) =>
          e.category.find((c) => c === action.payload)
        );
      }
      state.currentCategory = action.payload;
    },
    sortByDate: (state, action) => {
      state.orderSort = sortingOrder.default;
      state.dateSort = action.payload;
    },
    sortInOrder: (state, action) => {
      state.orderSort = action.payload;
      state.dateSort = sortingOrder.default;
    },
  },
});

export const {
  sortByDate,
  setLoading,
  sortInOrder,
  setTemplates,
  sortByCategory,
  searchTemplate,
} = templateSlice.actions;

export default templateSlice.reducer;
