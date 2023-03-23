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
  isFullScreen: true,
  isDrawerOpen: false,
  currentTab: 1,
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
    },
    updateIsDrawerOpen(state, action) {
      state.isDrawerOpen = action.payload;
    },
    updateIsFullScreen(state, action) {
      state.isFullScreen = action.payload;
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
  updateCurrentTab,
  updateIsDrawerOpen,
  updateIsFullScreen,
} = uiSlice.actions;
export const selectCurrentDevice = (state) => state.ui.currentDevice;
export const selectCurrentTab = (state) => state.ui.currentTab;
export const selectCurrentForm = (state) => state.ui.currentForm;
export const selectIsDrawerOpen = (state) => state.ui.isDrawerOpen;
export const selectIsFullScreen = (state) => state.ui.isFullScreen;
export default uiSlice.reducer;
