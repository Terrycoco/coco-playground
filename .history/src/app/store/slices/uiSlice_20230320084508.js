"use client";

//slice for ui state

import { createSlice, createSelector } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  currentForm: "",
  currentDevice: "",
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

export const { updateForm, updateDevice, updateTab, updateDrawerIsOpen } =
  uiSlice.actions;
export const selectCurrentDevice = (state) => state.currentDevice;
export const selectCurrentTab = (state) => state.currentTab;
export const selectCurrentForm = (state) => state.currentForm;
export const selectIsDrawerOpen = (state) => state.isDrawerOpen;
export const selectIsFullScreen = (state) => state.isFullScreen;
export default uiSlice.reducer;
