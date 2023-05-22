// 'use client';
import { createSlice } from "@reduxjs/toolkit";
import { productsData } from "../../../types/product";
import { filterOneItemByName, contains } from "../../../utils/reducerUtils";

export interface ShopState {
  value: productsData;
}

const initialState: ShopState = {
  value: [],
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    setShopData: (state, action) => {
      let indexElement = state.value.findIndex(
        (elem: any) => elem.name === action.payload.name
      );

      if (contains(state, action)) {
        state.value[indexElement] = action.payload;
      } else {
        state.value.push(action.payload);
      }
    },
    removeItemShop: (state, action) => {
      filterOneItemByName(state, action);
    },
    removeAllItemShop: (state, action) => {
      state.value.length = 0;
    },
  },
});

export const { setShopData, removeItemShop, removeAllItemShop } = shopSlice.actions;
export default shopSlice.reducer;
