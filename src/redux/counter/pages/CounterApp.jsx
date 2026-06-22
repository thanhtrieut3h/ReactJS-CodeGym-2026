import { Row, Col } from "antd";
import ButtonCounter from "../components/ButtonCounter";
import ResultCounter from "../components/ResultCounter";


const CounterApp = () => {
    return (
        <Row>
            <Col span={12} offset={6}>
                <ResultCounter />
                <ButtonCounter name="increment"> + </ButtonCounter>
                <ButtonCounter name="decrement"> - </ButtonCounter>
            </Col>
        </Row>
    )
}
export default CounterApp;