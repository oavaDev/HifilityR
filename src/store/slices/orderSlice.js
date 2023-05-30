import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: { 
    cartItems: []
   },
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addToOrder: (state, action) => {
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item.id === newItem.id
      );
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item.name === existItem.name ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      return { ...state, cart: { ...state.cart, cartItems } };
    },
    removeFromOrder: (state, action) => {
      const index = state.cart.cartItems.findIndex(
        (item) => item.id === action.payload
      );
      let newOrder = [...state.cart.cartItems];
      if (index >= 0) {
        newOrder.splice(index, 1);
      } else {
        alert("Can't remove product as its not in the order");
      }
      state.cart.cartItems = newOrder;
    },
  },
});

export const { addToOrder, removeFromOrder } = orderSlice.actions;
export const itemsInCart = (state) => state.order.cart.cartItems;
export const selectTotal = (state) =>
  state.order.cart.cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

export default orderSlice.reducer;
