// 'use client';
import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "./features/slice/shopSlice";
import favReducer from "./features/slice/favorisSlice";
import notifReducer from "./features/slice/notifSlice";
import historicReducer from "./features/slice/historicSlice";
import userReducer from "./features/slice/userSlice";
import {
  localStorageSetItem,
  localStorageGetItem,
} from "./features/middleware/localStorageMiddleware";

export const store = configureStore({
  reducer: {
    shop: shopReducer,
    favoris: favReducer,
    notif: notifReducer,
    historic: historicReducer,
    user: userReducer,
  },
  preloadedState: localStorageGetItem(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageSetItem),
});
