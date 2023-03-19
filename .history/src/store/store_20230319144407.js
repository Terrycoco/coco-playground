import { combineReducers, configureStore } from "@reduxjs/toolkit";
//import { createWrapper } from "next-redux-wrapper";

import { themeSlice } from "./themeSlice";
// import { fontsSlice } from "./fontsSlice";
// import { fontSizesSlice } from "./fontSizesSlice";
// import { textSlice } from "./textSlice";
// import { playgroundSlice } from "./playgroundSlice";
// import { colorsSlice } from "./colorsSlice";
// import { containersSlice } from "./containersSlice";
// import { variablesSlice } from "./variablesSlice";

export const store = configureStore({
  reducer: {
    [themeSlice.name]: themeSlice.reducer,
    //   [fontsSlice.name]: fontsSlice.reducer,
    //   [fontSizesSlice.name]: fontSizesSlice.reducer,
    //   [textSlice.name]: textSlice.reducer,
    //   [playgroundSlice.name]: playgroundSlice.reducer,
    //   [colorsSlice.name]: colorsSlice.reducer,
    //   [containersSlice.name]: containersSlice.reducer,
    //   [variablesSlice.name]: variablesSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true,
});

export const wrapper = createWrapper(makeStore);
