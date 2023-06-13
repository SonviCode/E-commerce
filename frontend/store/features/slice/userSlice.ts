// 'use client';
import { createSlice } from "@reduxjs/toolkit";
import { userState } from "../../../types/user";

const initialState: userState = {
  value: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload;
    },
    removeUser: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
