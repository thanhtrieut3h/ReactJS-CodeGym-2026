import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  categories: [],
  selectedProduct: null,
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // Actions cho việc fetch products
    fetchProductsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    fetchProductsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Actions cho fetch categories
    fetchCategoriesRequest: (state) => {
      state.loading = true;
    },
    fetchCategoriesSuccess: (state, action) => {
      state.loading = false;
      state.categories = action.payload;
    },
    fetchCategoriesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Actions cho fetch product by id
    fetchProductByIdRequest: (state) => {
      state.loading = true;
      state.selectedProduct = null;
    },
    fetchProductByIdSuccess: (state, action) => {
      state.loading = false;
      state.selectedProduct = action.payload;
    },
    fetchProductByIdFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Actions cho filter by category
    filterByCategory: (state, action) => {
      state.products = state.products.filter(
        product => product.category === action.payload
      );
    },

    clearSelectedProduct: (state) => {
      state.selectedProduct = null;
    },

    clearProducts: (state) => {
      state.products = [];
      state.selectedProduct = null;
      state.error = null;
    },
  },
});

export const {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
  fetchCategoriesRequest,
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
  fetchProductByIdRequest,
  fetchProductByIdSuccess,
  fetchProductByIdFailure,
  filterByCategory,
  clearSelectedProduct,
  clearProducts,
} = productSlice.actions;

export default productSlice.reducer;