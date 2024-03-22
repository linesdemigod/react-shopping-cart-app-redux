import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "../features/itemSlice";
import singleItemReducer from "../features/singleItemSlice";
import cartReducer from "../features/cartSlice";

export const store = configureStore({
  reducer: {
    items: itemReducer,
    item: singleItemReducer,
    carts: cartReducer,
  },
});
