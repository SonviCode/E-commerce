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
      let idAlreadyExists = state.value.some((elem: any) => {
        return (
          JSON.stringify(action.payload.name) === JSON.stringify(elem.name)
        );
      });
      if (idAlreadyExists) {
        console.log("existe déjà");
        state.value[0] = [state.value[0][0], state.value[0][1] + action.payload[1]];
      } else {
        state.value.push(action.payload);
      }
    },
    removeItemShop: (state, action) => {
      state.value = state.value.filter(
        (product: any) => product.name !== action.payload.name
      );
    },
  },
});

export const { setShopData, removeItemShop } = shopSlice.actions;
export default shopSlice.reducer;
