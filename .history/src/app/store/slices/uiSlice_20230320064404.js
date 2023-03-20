"use client";

//slice for ui state

import { createSlice, createSelector } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  currentForm: "",
  currentDevice: "",
  isDrawerOpen: false,
  currentTab: 1,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    updateText(state, action) {
      state.text[action.payload.element][action.payload.propName] =
        action.payload.value;
    },

    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.theme,
        };
      },
    },
  },
});

export const { updateText } = themeSlice.actions;
export const selectTheme = (state) => state.theme;
export const selectText = (state) => state.theme.text;
export default themeSlice.reducer;
