"use client";

import { createSlice, createSelector } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { currentTheme } from "@/themes";

const initialState = {
  headingCount: currentTheme.headingCount,
  fonts: currentTheme.fonts,
  colors: currentTheme.colors,
  colorVariants: currentTheme.colorVariants,
  devices: currentTheme.devices,
  deviceElements: currentTheme.deviceElements,
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
export const selectDevices = (state) => state.theme.devices;
export const selectDeviceElements = (state) => state.theme.deviceElements;
export default themeSlice.reducer;
