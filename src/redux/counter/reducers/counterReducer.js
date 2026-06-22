import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "../actions/counter";

const initState = {
    count : 0
}

export const counterReducer = (state = initState, action) => {
    switch(action.type){
        case INCREMENT_COUNTER:
            return {
                ...state,
                ...{ count: state.count + action.payload.val }
            }
        case DECREMENT_COUNTER:
            return {
                ...state,
                ...{ count: state.count - action.payload.val }
            }
        default:
            return state;
    }
}