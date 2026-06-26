import { call, put, takeLatest } from 'redux-saga/effects';
import { searchMovies } from '../../api/movieApi';
import {
  searchMoviesRequest,
  searchMoviesSuccess,
  searchMoviesFailure,
} from '../slices/movieSlice';

// Worker Saga: Xử lý tác vụ tìm kiếm
function* handleSearchMovies(action) {
  try {
    const query = action.payload || 'batman';
    const data = yield call(searchMovies, query);
    yield put(searchMoviesSuccess(data));
  } catch (error) {
    yield put(searchMoviesFailure(error.message));
  }
}

// Watcher Saga: Lắng nghe action searchMoviesRequest
function* watchSearchMovies() {
  yield takeLatest(searchMoviesRequest.type, handleSearchMovies);
}

export default watchSearchMovies;