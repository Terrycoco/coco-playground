"use client";

import { createSlice, createSelector } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { currentTheme } from "@/themes";

const initialState = {
  headingCount: currentTheme.headingCount,
  fonts: currentTheme.fonts,
  colors: currentTheme.colors,
  colorVariants: currentTheme.colorVariants,
  screens: currentTheme.screens,
  text: currentTheme.text,
  containers: currentTheme.containers,
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
export default textSlice.reducer;
