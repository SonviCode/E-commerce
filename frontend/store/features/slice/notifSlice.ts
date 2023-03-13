// 'use client';
import { createSlice } from "@reduxjs/toolkit";

export interface notifState {
  value: string;
}

const initialState: notifState = {
  value: "",
};

const notifSlice = createSlice({
  name: "notif",
  initialState,
  reducers: {
    setNotif: (state, action) => {
      state.value = action.payload;
    },
    removeNotif: (state, action) => {
      state.value = initialState.value;
    },
  },
});

export const { setNotif, removeNotif } = notifSlice.actions;
export default notifSlice.reducer;
