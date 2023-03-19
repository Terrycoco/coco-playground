"use client";
import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import counterReducer from "./Features/counter/counterSlice";

// config the store
const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
  },
});

// export default the store
export default store;
