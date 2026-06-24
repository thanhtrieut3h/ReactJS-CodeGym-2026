import { useDispatch, useSelector } from "react-redux";
import { changeTodoName } from '../actions/todo';

const InputTodo = (props) => {
    const dispatch = useDispatch();
    const todo = useSelector(state => state.todo.name);

    const changeName = (name) => {
        dispatch(changeTodoName(name))
    }

    return (
        <input
            type={props.type}
            name={props.name}
            value={todo}
            onChange={e => changeName(e.target.value)}
        />
    )
}
export default InputTodo;