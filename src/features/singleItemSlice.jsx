import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: {},
  loading: false,
  error: null,
};

const singleItemSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    singleItemLoading: state => {
      state.loading = true;
      state.error = null;
    },
    singleItemSuccess: (state, action) => {
      state.loading = false;
      state.item = action.payload;
    },
    singleItemFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { singleItemLoading, singleItemSuccess, singleItemFailure } =
  singleItemSlice.actions;

export default singleItemSlice.reducer;
