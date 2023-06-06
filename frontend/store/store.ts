// 'use client';
import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "./features/slice/shopSlice";
import favReducer from "./features/slice/favorisSlice";
import notifReducer from "./features/slice/notifSlice";
import historicReducer from "./features/slice/historicSlice";
import userReducer from "./features/slice/userSlice";
import deliveryReducer from "./features/slice/deliverySlice";
import {
  localStorageSetItem,
  localStorageGetItem,
} from "./features/middleware/localStorageMiddleware";

export type RootState = ReturnType<typeof store.getState> 

export const store = configureStore({
  reducer: {
    shop: shopReducer,
    favoris: favReducer,
    notif: notifReducer,
    historic: historicReducer,
    user: userReducer,
    delivery: deliveryReducer,
  },
  preloadedState: localStorageGetItem(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageSetItem),
});
