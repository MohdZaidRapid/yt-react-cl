import { createSlice } from "@reduxjs/toolkit";

const querySlice = createSlice({
  name: "query",
  initialState: {
    queryVideos: [],
  },
  reducers: {
    setVideoYt: (state, action) => {
      state.queryVideos = action.payload;
    },
  },
});

export const { setVideoYt } = querySlice.actions;

export default querySlice.reducer;
