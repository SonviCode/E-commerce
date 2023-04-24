// 'use client';
import { createSlice } from "@reduxjs/toolkit";
import { filterOneItemByName } from "../../../utils/reducerUtils";
import { productsData } from "../../../types/product";

export interface FavState {
  value: productsData;
}

const initialState: FavState = {
  value: [],
};

const favSlice = createSlice({
  name: "favoris",
  initialState,
  reducers: {
    setFavData: (state, action) => {
      state.value.unshift(action.payload);
    },
    removeItemFav: (state, action) => {
      filterOneItemByName(state, action);
    },
  },
});

export const { setFavData, removeItemFav } = favSlice.actions;
export default favSlice.reducer;
