import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    loading: false,
    error: null,
}
const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getProductRequest : (state) => {
            state.loading = true;
            state.error = null;
        },
        getProductSuccess: (state, action) => {
            state.loading = false;
            state.products = action.payload
        },
        getProductFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },
        clearError: (state) => {
            state.error = null;
        }
    }
});
export const {
    getProductRequest,
    getProductSuccess,
    getProductFailure,
    clearError
} = productSlice.actions;
export default productSlice.reducer;