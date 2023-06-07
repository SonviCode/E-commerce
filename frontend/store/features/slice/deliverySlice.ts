// 'use client';
import { createSlice } from "@reduxjs/toolkit";
import { Delivery } from "../../../types/shop";

const initialState: Delivery = {
  value: {
    deliveryName: "",
    deliveryPrice: 0,
    location: {
      adress: "",
      city: "",
      zipcode: 0
    }
  }
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
