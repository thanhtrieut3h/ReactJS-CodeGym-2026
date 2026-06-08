import { Row, Col, List, Checkbox } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

const TodoList = ({ data, remove, finish }) => {
  return (
    <Row>
      <Col span={24}>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item key={index}>
              <List.Item.Meta
                avatar={<Checkbox onChange={() => finish(item.id)} checked={item.done}/>}
                title={
                  <span
                    style={
                      item.done
                        ? { color: "red", textDecoration: "line-through" }
                        : null
                    }
                  >
                    {item.name}
                  </span>
                }
              />
              <div>
                <DeleteOutlined onClick={() => remove(item.id)} />
              </div>
            </List.Item>
          )}
        />
      </Col>
    </Row>
  );
};
TodoList.propTypes = {
    data: PropTypes.array.isRequired,
    remove: PropTypes.func.isRequired,
    finish: PropTypes.func.isRequired,
}
export default TodoList;
