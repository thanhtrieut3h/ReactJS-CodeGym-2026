import { all, fork } from 'redux-saga/effects';
import {
  watchFetchProducts,
  watchFetchCategories,
  watchFetchProductById,
} from './sagas/productSaga';
import { watchLogin } from './sagas/authSaga';

import {
  watchFetchUsers,
  watchFetchUserById,
  watchUpdateUser,
} from './sagas/userSaga';

export default function* rootSaga() {
  yield all([
    fork(watchFetchProducts),
    fork(watchFetchCategories),
    fork(watchFetchProductById),
    fork(watchLogin),
    fork(watchFetchUsers),
    fork(watchFetchUserById),
    fork(watchUpdateUser),
  ]);
}