"use client";

//slice for ui state

import { createSlice, createSelector } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  currentForm: "",
  currentDevice: "",
  chosenDevice: "",
  isDrawerOpen: false,
  currentTab: 1,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    updateCurrentForm(state, action) {
      state.currentForm = action.payload.value;
    },
    updateCurrentTab(state, action) {
      state.currentTab = action.payload.value;
    },
    updateCurrentDevice(state, action) {
      state.currentForm = action.payload.value;
    },
    updateDrawerIsOpen(state, action) {
      state.currentForm = action.payload.value;
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
export const selectDevice = (state) => state.currentDevice;
export const selectTab = (state) => state.currentTab;
export const selectForm = (state) => state.currentForm;
export const selectIsDrawerOpen = (state) => state.isDrawerOpen;
export default uiSlice.reducer;
