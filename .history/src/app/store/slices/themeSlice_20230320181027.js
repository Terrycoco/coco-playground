"use client";

import { createSlice, createSelector } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { currentTheme } from "@/themes";
import { updateColor, updateFont } from "@/store/sharedActions";

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
    updateColor(state, action) {
      state[action.payload.section][action.payload.category] =
        action.payload.value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateColor, (state, action) => {
        action.payload.map((obj) => {
          state[obj.themeVar] = obj.value;
        });
      })
      .addCase(updateFont, (state, action) => {
        console.log("got here:", action.payload);
        //theme variable (ie body) has been updated to another font
        state[action.payload.themeVar] = action.payload.fontVar;
      });
  },
});

export const { updateText } = themeSlice.actions;
export const selectTheme = (state) => state.theme;
export const selectColors = (state) => state.theme.colors;
export const selectColorVariants = (state) => state.theme.colorVariants;
export const selectText = (state) => state.theme.text;
export const selectDevices = (state) => state.theme.devices;
export const selectDeviceElements = (state) => state.theme.deviceElements;
export const selectContainers = (state) => state.theme.containers;
export default themeSlice.reducer;
