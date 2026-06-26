import { combineReducers } from '@reduxjs/toolkit';
import movieReducer from './slices/movieSlice';

const rootReducer = combineReducers({
  movies: movieReducer,
});

export default rootReducer;