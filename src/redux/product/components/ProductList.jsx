import { Row, Col, Card, Typography, Spin, Empty, Alert } from "antd";
import { DollarCircleOutlined, StarOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { getProductRequest } from "../managers/slices/productSlice";
import { useEffect } from "react";

const { Text, Title } = Typography;
const { Meta } = Card;

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProductRequest());
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "50px 0" }}>
        <Spin size="large" tip="Dang xu ly du lieu" />
      </div>
    );
  }
  if (error) {
    return (
      <Alert
        message="Co loi xay ra !"
        description={error}
        type="error"
        showIcon
        style={{ marginBottom: 16 }}
      />
    );
  }

  return (
    <Row gutter={[16, 24]}>
      {products.map((pd) => (
        <Col key={pd.id} xs={24} sm={12} md={8} lg={6} xl={4}>
          <Card
            hoverable
            cover={
              <img
                src={pd.image}
                style={{ height: 300, objectFit: "cover" }}
              />
            }
            style={{ height: "100%" }}
          >
            <Meta
              title={
                <Title level={5} ellipsis>
                  {pd.title}
                </Title>
              }
              description={
                <>
                  <div style={{ marginBottom: 8 }}>
                    <DollarCircleOutlined style={{ marginRight: 4 }} />
                    <Text type="secondary">{pd.price}</Text>
                    <span style={{ marginLeft: 12 }}>
                      <StarOutlined
                        style={{ color: "#fadb14", marginRight: 4 }}
                      />
                      <Text type="secondary">{pd.rating.rate}</Text>
                    </span>
                  </div>
                  <Text type="secondary" ellipsis={{ rows: 2 }}>
                    {pd.description}
                  </Text>
                </>
              }
            />
          </Card>
        </Col>
      ))}
    </Row>
  );
};
export default ProductList;
