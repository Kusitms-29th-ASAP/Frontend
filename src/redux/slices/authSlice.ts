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
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.registerToken = action.payload.registerToken;
    },
    clearToken: (state) => {
      state.accessToken = "";
      state.refreshToken = "";
      state.registerToken = "";
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;

export default authSlice.reducer;
