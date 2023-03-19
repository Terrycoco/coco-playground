"use client"; //anything that will access redux must use client
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/counterSlice";

// config the store
const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

// export default the store
console.log("store:", store);
export default store;
