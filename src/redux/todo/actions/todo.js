export const ADD_TODO = 'ADD_TODO';
export const addTodoByName = (nameTodo) => ({
    type: ADD_TODO,
    nameTodo
});

export const CHANGE_TODO_NAME = 'CHANGE_TODO_NAME';
export const changeTodoName = (keyword) => ({
    type: CHANGE_TODO_NAME,
    keyword
});

export const REMOVE_ITEM_TODO = 'REMOVE_ITEM_TODO';
export const removeItemTodoById = (id) => ({
    type: REMOVE_ITEM_TODO,
    id
});

export const FINISH_ITEM_TODO = 'FINISH_ITEM_TODO';
export const finishItemTodoById = (id) => ({
    type: FINISH_ITEM_TODO,
    id
});