"use client";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Features/counter/counterSlice";

// config the store
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// export default the store
export default store;
