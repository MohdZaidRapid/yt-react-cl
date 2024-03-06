import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      {
        state = { ...state, ...action.payload };
        state = Object.assign(state, action.payload);
      }
    },
  },
});

export const { cacheResults } = searchSlice.actions;
// LRU cache

export default searchSlice.reducer;

/**
 *  Cache:
 *
 * [
 *   time complexity to  search in array = O(n)
 *  search complexity of object = O(1)
 * ]
 * [
 * i:
 * ip:
 * iph:
 * iphone:
 * ]
 */

// new Map():
