// 'use client';
import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "./features/slice/shopSlice";
import favReducer from "./features/slice/favorisSlice";
import notifReducer from "./features/slice/notifSlice";
import historicReducer from "./features/slice/historicSlice";

export const store = configureStore({
  reducer: {
    shop: shopReducer,
    fav: favReducer,
    notif: notifReducer,
    historic: historicReducer,
  },
});
