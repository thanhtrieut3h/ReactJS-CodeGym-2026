import { all, fork } from 'redux-saga/effects';
import watchSearchMovies from './movieSaga';

export default function* rootSaga() {
  yield all([
    fork(watchSearchMovies),
  ]);
}