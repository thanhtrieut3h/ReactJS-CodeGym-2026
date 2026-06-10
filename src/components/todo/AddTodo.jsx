import { Row, Col, Input, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

const { Title } = Typography;
const { Search } = Input;

const AddTodo = ({ change, add }) => {
  return (
    <Row style={{ margin: "20px 0px" }}>
      <Col span={24}>
        <Title level={2}> Todo !</Title>
        <Search
            placeholder="Enter data ..."
            enterButton={<PlusOutlined/>}
            allowClear
            //value={value}
            onChange={change}
            onSearch={val => add(val)}
        />
      </Col>
    </Row>
  );
};
AddTodo.propTypes = {
  change: PropTypes.func.isRequired,
  add: PropTypes.func.isRequired,
  //value: PropTypes.string
}
export default AddTodo;
