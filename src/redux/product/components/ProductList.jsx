import { Row, Col, Card, Typography } from "antd";
import { DollarCircleOutlined, StarOutlined } from "@ant-design/icons";

const { Text, Title } = Typography;
const { Meta } = Card;

const ProductList = () => {
    return (
        <>
            <Row gutter={[16, 24]}>
                <Col xs={24} sm={12} md={8} lg={6} xl={4}>
                    <Card 
                        hoverable
                        cover={
                            <img
                                src={`https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png`}
                                style={{height: 300, objectFit: 'cover'}}/>
                        }
                        style={{ height: '100%' }}
                    >
                        <Meta
                            title={
                                <Title level={5} ellipsis>
                                    Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
                                </Title>
                            }
                            description={
                                <>
                                   <div style={{marginBottom: 8}}>
                                        <DollarCircleOutlined style={{marginRight: 4}} />
                                        <Text type="secondary">109.95</Text>
                                        <span style={{marginLeft: 12}}>
                                            <StarOutlined style={{color: '#fadb14', marginRight: 4}}/>
                                            <Text type="secondary">
                                                3.9
                                            </Text>
                                        </span>
                                   </div>
                                   <Text type="secondary" ellipsis={{rows: 2}}>
                                        Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday
                                   </Text>
                                </>
                            }
                        />
                    </Card>
                </Col>
            </Row>
        </>
    )
}
export default ProductList;