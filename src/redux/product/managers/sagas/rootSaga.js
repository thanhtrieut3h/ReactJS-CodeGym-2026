import { all, fork } from 'redux-saga/effects';
import watchGetProductAll from './productSaga';

export default function* rootSaga(){
    yield all([
        fork(watchGetProductAll)
    ])
}
