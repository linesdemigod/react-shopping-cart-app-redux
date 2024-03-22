import { ItemLoading, ItemSuccess, ItemFailure } from "./itemSlice";
import {
  addCartItem,
  getCartItems,
  removeCartItem,
  cartLoading,
} from "./cartSlice";
import {
  singleItemLoading,
  singleItemSuccess,
  singleItemFailure,
} from "./singleItemSlice";
import { addItemLoading, addItemSuccess, addItemFailure } from "./addItemSlice";
import axios from "axios";

export const fetchItems = () => async dispatch => {
  dispatch(ItemLoading());

  try {
    const response = await axios.get("http://localhost:8000/products", {
      headers: {
        Accept: "application/json",
      },
    });
    const data = response.data;
    dispatch(ItemSuccess(data));
  } catch (error) {
    console.log(error);
    dispatch(ItemFailure(error.response.data));
  }
};

export const getSingleItem = id => async dispatch => {
  dispatch(singleItemLoading());

  try {
    const response = await axios.get(`http://localhost:8000/products`, {
      headers: {
        Accept: "application/json",
      },
      params: {
        id: id,
      },
    });
    const data = response.data;
    dispatch(singleItemSuccess(data));
  } catch (error) {
    console.log(error);
    dispatch(singleItemFailure(error.response.data));
  }
};

export const addItem = formData => async dispatch => {
  dispatch(addItemLoading());

  try {
    const response = await axios.post(
      "http://localhost:8000/products",
      formData,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    const data = response.data;
    dispatch(addItemSuccess(data));
  } catch (error) {
    dispatch(addItemFailure(error));
    console.log(error);
  }
};

export const addToCart = item => dispatch => {
  const items = JSON.parse(localStorage.getItem("items") || "[]");
  const existingItemIndex = items.findIndex(i => i.id === item.id);

  if (existingItemIndex !== -1) {
    // If item already exists, update its quantity
    items[existingItemIndex].quantity += item.quantity;
  } else {
    // Otherwise, add it as a new item
    items.push(item);
  }

  localStorage.setItem("items", JSON.stringify(items));
  dispatch(addCartItem(items));
};

//note json-server does not support fetching data by multiple id 's so we need to make request to get
//all the records and filter it

export const fetchCartItems = () => async dispatch => {
  // Retrieve cart items from localStorage
  let cartItems = JSON.parse(localStorage.getItem("items")) || [];

  // Extract IDs from cartItems
  let ids = cartItems.map(item => item.id);

  dispatch(cartLoading());

  try {
    // Fetch all products
    const allProductsResponse = await axios.get(
      "http://localhost:8000/products",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    const allProducts = allProductsResponse.data;

    // Filter products based on IDs
    const cartItemsData = allProducts
      .filter(product => ids.includes(product.id))
      .map(product => ({
        ...product,
        quantity: cartItems.find(item => item.id === product.id).quantity,
      }));

    // Dispatch action with filtered cart items
    dispatch(getCartItems(cartItemsData));
  } catch (error) {
    console.error(error);
    // Dispatch an action to handle error
  }
};

export const removeItemFromCart = id => dispatch => {
  // Retrieve the items array from local storage
  let items = JSON.parse(localStorage.getItem("items")) || [];

  // Filter out the item with the specified ID
  items = items.filter(item => item.id !== id);

  // Update the items array in local storage
  localStorage.setItem("items", JSON.stringify(items));

  // Remove item from Redux state
  dispatch(removeCartItem(id));
};
