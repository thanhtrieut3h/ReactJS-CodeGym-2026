import { call, put, takeLatest } from 'redux-saga/effects';
import { getProductAll } from '../../api/productApi';
import {
    getProductRequest,
    getProductSuccess,
    getProductFailure
} from '../slices/productSlice';

function* handleGetProductAll(){
    try {
        const data = yield call(getProductAll);
        yield put(getProductSuccess(data));
    } catch(error){
        yield put(getProductFailure(error.message));
    } 
}
function* watchGetProductAll(){
    yield takeLatest(getProductRequest.type, handleGetProductAll);
}
export default watchGetProductAll