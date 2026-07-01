import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { productAPI } from '../../api/api';
import {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
  fetchCategoriesRequest,
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
  fetchProductByIdRequest,
  fetchProductByIdSuccess,
  fetchProductByIdFailure,
} from '../slices/productSlice';

// Fetch all products
function* fetchProducts() {
  try {
    const response = yield call(productAPI.getAll);
    yield put(fetchProductsSuccess(response.data));
  } catch (error) {
    yield put(fetchProductsFailure(error.message));
  }
}

// Fetch categories
function* fetchCategories() {
  try {
    const response = yield call(productAPI.getCategories);
    yield put(fetchCategoriesSuccess(response.data));
  } catch (error) {
    yield put(fetchCategoriesFailure(error.message));
  }
}

// Fetch product by id
function* fetchProductById(action) {
  try {
    const response = yield call(productAPI.getById, action.payload);
    yield put(fetchProductByIdSuccess(response.data));
  } catch (error) {
    yield put(fetchProductByIdFailure(error.message));
  }
}

// Watcher Sagas
export function* watchFetchProducts() {
  yield takeLatest(fetchProductsRequest.type, fetchProducts);
}

export function* watchFetchCategories() {
  yield takeLatest(fetchCategoriesRequest.type, fetchCategories);
}

export function* watchFetchProductById() {
  yield takeEvery(fetchProductByIdRequest.type, fetchProductById);
}