"use client"; //anything that will access redux must use client
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import variablesReducer from "./slices/variablesSlice";

// config the store
const store = configureStore({
  reducer: {
    theme: themeReducer,
    [variablesSlice.name]: variablesSlice.reducer,
  },
});

// export default the store
console.log("store:", store, store.getState());
export default store;
