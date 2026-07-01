import { call, put, takeLatest } from 'redux-saga/effects';
import { userAPI } from '../../api/api';
import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
  fetchUserByIdRequest,
  fetchUserByIdSuccess,
  fetchUserByIdFailure,
  updateUserRequest,
  updateUserSuccess,
  updateUserFailure,
} from '../slices/userSlice';

function* fetchUsers() {
  try {
    const response = yield call(userAPI.getAll);
    yield put(fetchUsersSuccess(response.data));
  } catch (error) {
    yield put(fetchUsersFailure(error.message));
  }
}

function* fetchUserById(action) {
  try {
    const response = yield call(userAPI.getById, action.payload);
    yield put(fetchUserByIdSuccess(response.data));
  } catch (error) {
    yield put(fetchUserByIdFailure(error.message));
  }
}

function* updateUser(action) {
  try {
    const { id, userData } = action.payload;
    const response = yield call(userAPI.updateUser, id, userData);
    yield put(updateUserSuccess(response.data));
  } catch (error) {
    yield put(updateUserFailure(error.message));
  }
}

export function* watchFetchUsers() {
  yield takeLatest(fetchUsersRequest.type, fetchUsers);
}

export function* watchFetchUserById() {
  yield takeLatest(fetchUserByIdRequest.type, fetchUserById);
}

export function* watchUpdateUser() {
  yield takeLatest(updateUserRequest.type, updateUser);
}