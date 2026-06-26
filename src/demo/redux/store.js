import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './sagas/rootSaga';

// Tạo saga middleware
const sagaMiddleware = createSagaMiddleware();

// Cấu hình store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false, // Tắt thunk vì sử dụng saga
      serializableCheck: false, // Cho phép saga hoạt động
    }).concat(sagaMiddleware),
    //devTools: process.env.NODE_ENV !== 'production',
});

// Chạy saga
sagaMiddleware.run(rootSaga);

export default store;