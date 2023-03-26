"use client";

import { createSlice, createSelector } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { currentTheme } from "@/themes";
import { updateColor, updateFont } from "@/store/sharedActions";
import { isOneOf } from "@/utils";

const initialState = {
  project: currentTheme.project,
  fonts: currentTheme.fonts,
  colors: currentTheme.colors,
  colorVariants: currentTheme.colorVariants,
  devices: currentTheme.devices,
  deviceSettings: currentTheme.deviceSettings,
  text: currentTheme.text,
  containers: currentTheme.containers,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    updateThemeValue(state, action) {
      console.log("payload:", action.payload);
      //for device-specific settings (add device node)
      if (isOneOf(action.payload.propName, ["fontSize", "lineHeight"])) {
        console.log("payload:", action.payload);
        let { section, element, propName, device, value } = action.payload;
        state[section][element][propName][device] = value;

        //for project settings (no element node)
      } else if (isOneOf(action.payload.propName, ["headingCount"])) {
        state[action.payload.section][action.payload.propName] =
          action.payload.value;

        //normal element
      } else {
        state[action.payload.section][action.payload.element][
          action.payload.propName
        ] = action.payload.value;
      }
    },
    updateText(state, action) {
      state.text[action.payload.element][action.payload.propName] =
        action.payload.value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateColor, (state, action) => {
        action.payload.map((obj) => {
          state[obj.section][obj.category] = obj.value;
        });
      })
      .addCase(updateFont, (state, action) => {
        //theme variable (ie body) has been updated to another font
        let { section, element, propName, name, themeVar } = action.payload;
        if (section == "fonts") {
          state.fonts[propName] = name;
        } else {
          state[section][element][propName] = themeVar;
        }
      });
  },
});

export const { updateText, updateThemeValue } = themeSlice.actions;
export const selectHeadingCount = (state) => state.theme.project.headingCount;
export const selectTheme = (state) => state.theme;
export const selectColors = (state) => state.theme.colors;
export const selectFonts = (state) => state.theme.fonts;
export const selectColorVariants = (state) => state.theme.colorVariants;
export const selectText = (state) => state.theme.text;
export const selectDevices = (state) => state.theme.devices;
export const selectDeviceSettings = (state) => state.theme.deviceSettings;
export const selectContainers = (state) => state.theme.containers;
export default themeSlice.reducer;
