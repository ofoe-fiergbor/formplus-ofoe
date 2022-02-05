import { configureStore } from "@reduxjs/toolkit";

import Templates from "./templateSlicer";

export const store = configureStore({
  reducer: {
    templates: Templates,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
