import { apiProduct } from "./services/api";
import { useState, useEffect } from "react";
import ItemProduct from "./components/ItemProduct";
import { Row, Col, Skeleton } from "antd";

const Product = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const data = await apiProduct.getDataProducts();
      if (data.length > 0) {
        setProducts(data);
        setError(null);
      } else {
        setError({ cod: 500, message: "Not found data" });
        setProducts([]);
      }
      setLoading(false);
    };
    getData();
  }, []);

  if (loading) {
    return (
      <Row>
        <Col span={12} offset={6}>
          <Skeleton active />
        </Col>
      </Row>
    );
  }
  if (error !== null) {
    return (
      <Row>
        <Col span={12} offset={6}>
          <h2>{error.message}</h2>
        </Col>
      </Row>
    );
  }

  return <ItemProduct products={products} />;
};
export default Product;
