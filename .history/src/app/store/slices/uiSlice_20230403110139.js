"use client";

//slice for ui state

import { createSlice, createSelector } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { currentTheme } from "@/themes";
const deviceArray = currentTheme.devices;

const initialState = {
  currentForm: "",
  currentDevice: undefined,
  currentDeviceIdx: 2,
  userDevice: undefined,
  userDeviceIdx: undefined,
  isFullScreen: true,
  isDrawerOpen: false,
  currentTab: 1,
  isThemeOpen: false,
  isCssOpen: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    updateCurrentForm(state, action) {
      state.currentForm = action.payload;
    },
    updateCurrentTab(state, action) {
      state.currentTab = action.payload;
    },
    updateCurrentDevice(state, action) {
      state.currentDevice = action.payload;
      state.currentDeviceIdx = deviceArray.indexOf(action.payload);
    },
    updateUserDevice(state, action) {
      state.userDevice = action.payload;
      state.userDeviceIdx = deviceArray.indexOf(action.payload);
    },

    updateIsDrawerOpen(state, action) {
      state.isDrawerOpen = action.payload;
    },
    updateIsFullScreen(state, action) {
      state.isFullScreen = action.payload;
    },
    updateIsThemeOpen(state, action) {
      state.isThemeOpen = action.payload;
    },
    updateIsCssOpen(state, action) {
      state.isCssOpen = action.payload;
    },

    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.ui,
        };
      },
    },
  },
});

export const {
  updateCurrentForm,
  updateCurrentDevice,
  updateUserDevice,
  updateCurrentTab,
  updateIsDrawerOpen,
  updateIsFullScreen,
  updateIsThemeOpen,
  updateIsCssOpen,
} = uiSlice.actions;
export const selectCurrentDevice = (state) => state.ui.currentDevice;
export const selectCurrentDeviceIdx = (state) => state.ui.currentDeviceIdx;
export const selectUserDevice = (state) => state.ui.userDevice;
export const selectUserDeviceIdx = (state) => state.ui.userDeviceIdx;
export const selectCurrentTab = (state) => state.ui.currentTab;
export const selectCurrentForm = (state) => state.ui.currentForm;
export const selectIsDrawerOpen = (state) => state.ui.isDrawerOpen;
export const selectIsFullScreen = (state) => state.ui.isFullScreen;
export const selectIsThemeOpen = (state) => state.ui.isThemeOpen;
export const selectIsCssOpen = (state) => state.ui.isCssOpen;
export default uiSlice.reducer;
