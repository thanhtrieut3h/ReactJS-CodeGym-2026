import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [],
  loading: false,
  error: null,
  searchQuery: 'batman',
  totalResults: 0,
  totalPages: 0,
  currentPage: 1,
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    // Action bắt đầu tìm kiếm
    searchMoviesRequest: (state, action) => {
      state.loading = true;
      state.error = null;
      state.searchQuery = action.payload;
    },
    // Action khi tìm kiếm thành công
    searchMoviesSuccess: (state, action) => {
      state.loading = false;
      state.movies = action.payload.results;
      state.totalResults = action.payload.total_results;
      state.totalPages = action.payload.total_pages;
      state.currentPage = action.payload.page;
    },
    // Action khi tìm kiếm thất bại
    searchMoviesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // Clear error
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  searchMoviesRequest,
  searchMoviesSuccess,
  searchMoviesFailure,
  clearError,
} = movieSlice.actions;

export default movieSlice.reducer;