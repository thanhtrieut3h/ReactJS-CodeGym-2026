import { addTodoByName } from "../actions/todo";
import { useDispatch, useSelector } from "react-redux";

const ButtonTodo = (props) => {
    const dispatch = useDispatch();
    const todo = useSelector(state => state.todo.name);

    const addTodo = () => {
        let nameTodo = todo.trim();
        if(nameTodo.length > 0){
            dispatch(addTodoByName(nameTodo))
        }
    }

    return (
        <button name="button" onClick={() => addTodo()}> {props.children}</button>
    )
}
export default ButtonTodo;