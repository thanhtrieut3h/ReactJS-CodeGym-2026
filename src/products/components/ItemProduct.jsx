import { Row, Col, Card } from "antd";
import PropTypes from "prop-types";

const { Meta } = Card;

const ItemProduct = ({ products }) => {
  return (
    <Row>
      {products.map((item) => {
        return (
          <Col span={4} key={item.id}>
            <Card
              hoverable
              style={{width: '100%', height: '100%'}}
              cover={
                <img draggable={false} alt={item.title} src={item.image} />
              }
            >
              <Meta title={item.title} />
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

ItemProduct.propTypes = {
  products: PropTypes.array.isRequired,
};
export default ItemProduct;
