// 'use client';
import { configureStore } from "@reduxjs/toolkit";
import shopReducer from './features/shop/shopSlice';

export const store = configureStore({
  reducer: {
    shop: shopReducer,
  },
});

