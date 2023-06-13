// 'use client';
import { createSlice } from "@reduxjs/toolkit";
import { DeliveryState } from "../../../types/shop";

const initialState: DeliveryState = {
  value: undefined,
};

const deliverySlice = createSlice({
  name: "delivery",
  initialState,
  reducers: {
    setDelivery: (state, action) => {
      state.value = action.payload;
    },
    removeDelivery: (state, action) => {
      state = initialState;
    },
  },
});

export const { setDelivery, removeDelivery } = deliverySlice.actions;
export default deliverySlice.reducer;
