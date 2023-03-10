// 'use client';
import { createSlice } from "@reduxjs/toolkit";
import { productsItem } from "../../../types/product";
import { filterOneItemByName, contains } from '../../../utils/reducerUtils';

export interface ShopState {
  value: productsItem[];
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
  },
});

export const { setShopData, removeItemShop } = shopSlice.actions;
export default shopSlice.reducer;
