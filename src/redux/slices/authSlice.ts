import { createSlice } from "@reduxjs/toolkit";
import { register } from "module";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: null,
    refreshToken: null,
    registerToken: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.accessToken = action.payload;
      state.refreshToken = action.payload;
      state.registerToken = action.payload;
    },
    clearToken: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.registerToken = null;
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;

export default authSlice.reducer;
