// import { combineReducers } from "redux";
// import { counterReducer } from "./counterReducer";
import counterReducer from './counterSlice';

// const rootReducer = combineReducers({
//     counter: counterReducer
// });
const rootReducer = {
    reducer: {
       counter: counterReducer
    }
}
export default rootReducer;