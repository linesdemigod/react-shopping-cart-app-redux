import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: {},
  loading: false,
  error: null,
};

const addItemSlice = createSlice({
  name: "addItem",
  initialState,
  reducers: {
    addItemLoading: state => {
      state.loading = true;
      state.error = null;
    },
    addItemSuccess: (state, action) => {
      state.loading = false;
      state.product = action.payload;
    },
    addItemFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { addItemLoading, addItemSuccess, addItemFailure } =
  addItemSlice.actions;

export default addItemSlice.reducer;
