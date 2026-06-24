import { useSelector, useDispatch } from "react-redux";
import { removeItemTodoById, finishItemTodoById } from '../actions/todo';


const ListTodo = () => {
    const todos = useSelector(state => state.todo.listWorks);
    const dispatch = useDispatch();
    const removeItem = (id) => {
        dispatch(removeItemTodoById(id));
    }
    const finishItem = id => {
        dispatch(finishItemTodoById(id));
    }
    return (
        <ul>
            {todos.map((item) => (
                <li key={item.id}>
                    <input
                        type="checkbox"
                        checked={item.done}
                        onChange={() => finishItem(item.id)}/>
                    <span
                        style={
                            item.done ? 
                            {color: 'red', textDecoration: 'line-through'} 
                            : null
                            }> {item.nameTodo} </span>
                    <button type="button" onClick={() => removeItem(item.id)}> Delete </button>
                </li>
            ))}
            
        </ul>
    )
}
export default ListTodo;