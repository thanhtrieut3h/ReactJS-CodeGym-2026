import {
    ADD_TODO,
    CHANGE_TODO_NAME,
    REMOVE_ITEM_TODO,
    FINISH_ITEM_TODO
} from '../actions/todo';

const initState = {
    name: '',
    listWorks: [],
    idTodo: 1
}
export const todoReducer = (state = initState, action) => {
    switch(action.type) {
        case CHANGE_TODO_NAME:
            return {
                ...state,
                name: action.keyword
            }
        case ADD_TODO:
            return {
                ...state,
                ...{
                    idTodo: state.idTodo + 1,
                    name: '',
                    listWorks: [...state.listWorks, {
                        nameTodo: action.nameTodo,
                        id: state.idTodo,
                        done: false
                    }]
                }
            }
        case REMOVE_ITEM_TODO:
            const idItem = action.id;
            const newTodos = state.listWorks.filter(item => item.id !== idItem);
            return {
                ...state,
                listWorks: newTodos
            }
        case FINISH_ITEM_TODO:
            const id = action.id;
            const newData = state.listWorks.map(item => {
                return item.id == id ? {...item, done: !item.done} : item;
            });
            return {
                ...state,
                listWorks: newData
            }
        default:
            return state;
    }
}