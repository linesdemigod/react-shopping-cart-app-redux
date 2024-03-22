import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    ItemLoading: state => {
      state.loading = true;
      state.error = null;
    },
    ItemSuccess: (state, action) => {
      state.loading = false;
      state.items = action.payload;
    },
    ItemFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { ItemLoading, ItemSuccess, ItemFailure } = itemSlice.actions;

export default itemSlice.reducer;
