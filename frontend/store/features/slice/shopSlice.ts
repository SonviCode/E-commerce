// 'use client';
import { createSlice } from "@reduxjs/toolkit";

export interface ShopState {
  value: any;
}

const initialState: ShopState = {
  value: [],
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    setShopData: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { setShopData } = shopSlice.actions;
export default shopSlice.reducer;
