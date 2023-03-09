// 'use client';
import { createSlice } from "@reduxjs/toolkit";

export interface FavState {
  value: any;
}

const initialState: FavState = {
  value: [],
};

const favSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    setFavData: (state, action) => {
      state.value.push(action.payload);
    },
    removeItemFav: (state, action) => {
      state.value = state.value.filter(
        (product: any) => product.name !== action.payload.name
      );
    },
  },
});

export const { setFavData, removeItemFav } = favSlice.actions;
export default favSlice.reducer;
