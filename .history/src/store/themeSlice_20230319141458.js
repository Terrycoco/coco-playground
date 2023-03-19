import { createSlice, createSelector } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { currentTheme } from "@/themes";

const initialState = {
  fonts: currentTheme.fonts,
  colors: currentTheme.colors,
};

export const themeSlice = createSlice({
  name: "text",
  initialState,
  reducers: {
    updateText(state, action) {
      state[action.payload.element][action.payload.propName] =
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

export const { updateText } = textSlice.actions;
export const selectText = (state) => state.text;
export const selectElement = (state) => state.text[element];
export default textSlice.reducer;
