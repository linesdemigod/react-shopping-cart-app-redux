import { createSlice } from "@reduxjs/toolkit";

// Function to load cart items from local storage
const loadCartItemsFromLocalStorage = () => {
  try {
    const cartItems = localStorage.getItem("items");
    if (cartItems === null) {
      return [];
    }
    return JSON.parse(cartItems);
  } catch (error) {
    console.error("Error loading cart items from local storage:", error);
    return [];
  }
};

// Function to calculate total quantity of items in the cart
const calculateCartCount = cartItems => {
  return cartItems.reduce((total, item) => total + item.quantity, 0);
};

const initialState = {
  carts: loadCartItemsFromLocalStorage(),
  cartCount: 0,
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      state.carts = action.payload;
      state.cartCount = calculateCartCount(action.payload); // Update cart count
    },

    getCartItems: (state, action) => {
      //get the items in the cart
      state.carts = action.payload;
    },
    removeCartItem: (state, action) => {
      let updatedCartItems = state.carts.filter(
        item => item.id !== action.payload
      );

      state.carts = updatedCartItems;
      state.cartCount = calculateCartCount(updatedCartItems);
    },
    cartLoading: state => {
      state.loading = true;
      state.error = null;
    },
  },
});

// Update cart count on page reload
if (initialState.carts.length > 0) {
  initialState.cartCount = calculateCartCount(initialState.carts);
}

export const { cartLoading, addCartItem, getCartItems, removeCartItem } =
  cartSlice.actions;

export default cartSlice.reducer;
