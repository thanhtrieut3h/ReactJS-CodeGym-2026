import { Row, Col } from "antd";
import AddTodo from "./components/todo/AddTodo";
import TodoList from "./components/todo/TodoList";
import { useState } from "react";

const TodoApp = () => {
  const [nameTodo, setNameTodo] = useState(null);
  const [dataList, setDataList] = useState([]);
  const [idTodo, setIdTodo] = useState(1);

  const changeNameTodo = (event) => {
    let value = event.target.value; // lay du lieu nguoi dung nhap vao input
    setNameTodo(value);
  };
  const addTodo = (works = "") => {
    works = works.trim();
    if (works.length > 0) {
      setIdTodo(idTodo + 1);
      setDataList([
        ...dataList,
        {
          id: idTodo,
          name: works,
          done: false,
        },
      ]);
    }
  };
  // xoa cong viec
  const removeItemtodo = (id) => {
    const newWorks = dataList.filter(item => item.id !== id);
    if(newWorks !== undefined){
      setDataList(newWorks);
    }
  }
  const finishItemTodo = (id) => {
    const works = dataList.map(item => {
      return item.id === id ? {...item, done: !item.done} : item
    });
    if(works !== undefined){
      setDataList(works);
    }
  }

  return (
    <Row>
      <Col span={12} offset={6}>
        <AddTodo
          change={changeNameTodo}
          value={nameTodo}
          add={addTodo}
        />
        <TodoList
          data={dataList}
          remove={removeItemtodo}
          finish={finishItemTodo}
        />
      </Col>
    </Row>
  );
};
export default TodoApp;
