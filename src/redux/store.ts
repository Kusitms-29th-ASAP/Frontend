import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slices/categorySlice";
import authReducer from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
