"use client"; //anything that will access redux must use client
import { configureStore } from "@reduxjs/toolkit";
import { themeSlice } from "./slices/themeSlice";
import { variablesSlice } from "./slices/variablesSlice";
import { uiSlice } from "./slices/uiSlice";

// config the store
const store = configureStore({
  reducer: {
    [themeSlice.name]: themeSlice.reducer,
    [variablesSlice.name]: variablesSlice.reducer,
    [uiSlice.name]: uiSlice.reducer,
  },
});

// export default the store
console.log("store:", store.getState());
export default store;
