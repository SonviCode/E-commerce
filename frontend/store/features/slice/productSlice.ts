// 'use client';
import { createSlice } from "@reduxjs/toolkit";
import { productsItem } from "../../../types/product";

// export interface ShopState {
//   value: Object[];
// }

const initialState: any = {
  value: [],
};

const productSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    setProductData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setProductData } = productSlice.actions;
export default productSlice.reducer;
