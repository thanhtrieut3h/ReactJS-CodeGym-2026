import InputTodo from "../components/InputTodo";
import ButtonTodo from "../components/ButtonTodo";
import ListTodo from "../components/ListTodo";

const IndexTodo = () => {
    return (
        <>
            <InputTodo type="text" name="todo" />
            <ButtonTodo> Add </ButtonTodo>
            <ListTodo />
        </>
    )
}
export default IndexTodo;