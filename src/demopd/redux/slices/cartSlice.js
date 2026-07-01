import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  carts: [],
  currentCart: null,
  loading: false,
  error: null,
  totalItems: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Fetch carts
    fetchCartsRequest: (state) => {
      state.loading = true;
    },
    fetchCartsSuccess: (state, action) => {
      state.loading = false;
      state.carts = action.payload;
    },
    fetchCartsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Add to cart
    addToCart: (state, action) => {
      const existingItem = state.carts.find(
        item => item.productId === action.payload.productId
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.carts.push(action.payload);
      }
      state.totalItems += action.payload.quantity;
      state.totalPrice += action.payload.price * action.payload.quantity;
    },

    // Remove from cart
    removeFromCart: (state, action) => {
      const item = state.carts.find(
        item => item.productId === action.payload
      );
      if (item) {
        state.totalItems -= item.quantity;
        state.totalPrice -= item.price * item.quantity;
        state.carts = state.carts.filter(
          item => item.productId !== action.payload
        );
      }
    },

    // Update quantity
    updateCartQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const item = state.carts.find(
        item => item.productId === productId
      );
      if (item) {
        const diff = quantity - item.quantity;
        state.totalItems += diff;
        state.totalPrice += diff * item.price;
        item.quantity = quantity;
      }
    },

    // Clear cart
    clearCart: (state) => {
      state.carts = [];
      state.totalItems = 0;
      state.totalPrice = 0;
    },

    setCurrentCart: (state, action) => {
      state.currentCart = action.payload;
    },
  },
});

export const {
  fetchCartsRequest,
  fetchCartsSuccess,
  fetchCartsFailure,
  addToCart,
  removeFromCart,
  updateCartQuantity,
  clearCart,
  setCurrentCart,
} = cartSlice.actions;

export default cartSlice.reducer;