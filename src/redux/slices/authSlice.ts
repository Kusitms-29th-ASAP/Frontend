import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: "",
    refreshToken: "",
    registerToken: "",
  },
  reducers: {
    setToken: (state, action) => {
      state.accessToken = action.payload;
      state.refreshToken = action.payload;
      state.registerToken = action.payload;
    },
    clearToken: (state) => {
      accessToken: "";
      refreshToken: "";
      registerToken: "";
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;

export default authSlice.reducer;
