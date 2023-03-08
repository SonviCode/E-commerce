// 'use client';
import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "./features/slice/shopSlice";
import productsReducer from "./features/slice/productSlice";

export const store = configureStore({
  reducer: {
    shop: shopReducer,
    // products: productsReducer,
  },
});
