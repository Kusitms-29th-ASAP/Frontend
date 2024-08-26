import { createSlice } from "@reduxjs/toolkit";

export const audioSlice = createSlice({
  name: "audio",
  initialState: {
    audio: false,
  },
  reducers: {
    setAudio: (state, action) => {
      state.audio = action.payload;
    },
  },
});

export const { setAudio } = audioSlice.actions;
export default audioSlice.reducer;
