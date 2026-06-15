import { Row, Col } from 'antd';
import { useContext } from 'react';
import ChangeUIContext from '../share/context';

const LayoutComponent = ({ children }) => {
    const { bgColor } = useContext(ChangeUIContext);
    return (
        <Row className={bgColor}>
            <Col span={20} offset={2}>
                {children}
            </Col>
        </Row>
    )
}
export default LayoutComponent;