// 'use client';
import { createSlice } from "@reduxjs/toolkit";
import { contains, filterOneItemByName } from "../../../utils/reducerUtils";
import { productsData } from "../../../types/product";

export interface historicState {
  value: productsData;
}

const initialState: historicState = {
  value: [],
};

const historicSlice = createSlice({
  name: "historic",
  initialState,
  reducers: {
    setHistoric: (state, action) => {
      if (state.value.length > 4) {
        state.value.pop();
      }
      if (contains(state, action)) {
        filterOneItemByName(state, action);
      }
      state.value.unshift(action.payload);
    },
    removeHistoric: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { setHistoric, removeHistoric } = historicSlice.actions;
export default historicSlice.reducer;
