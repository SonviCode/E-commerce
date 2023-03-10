// 'use client';
import { createSlice } from "@reduxjs/toolkit";
import { contains, filterOneItemByName } from "../../../utils/reducerUtils";

export interface historicState {
  value: any[];
}

const initialState: historicState = {
  value: [],
};

const historicSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    setHistoric: (state, action) => {
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
