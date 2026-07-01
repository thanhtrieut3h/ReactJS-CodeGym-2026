import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button, Typography, Spin } from 'antd';
import { fetchProductsRequest } from '../../redux/slices/productSlice';
import { addToCart } from '../../redux/slices/cartSlice';

const { Title, Paragraph } = Typography;

const HomePage = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductsRequest());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart({
      productId: product.id,
      title: product.title,
      price: product.price,
      quantity: 1,
      image: product.image,
    }));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Spin size="large" tip="Loading..." />
      </div>
    );
  }

  const featuredProducts = products.slice(0, 8);

  return (
    <div>
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 mb-8">
        <div className="container mx-auto text-center">
          <Title className="text-white">Welcome to ShopEase</Title>
          <Paragraph className="text-xl text-gray-100">
            Discover amazing products at great prices
          </Paragraph>
          <Link to="/products">
            <Button type="primary" size="large" className="bg-white text-blue-600">
              Shop Now
            </Button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto">
        <Title level={2} className="mb-6">Featured Products</Title>
        <Row gutter={[16, 16]}>
          {featuredProducts.map((product) => (
            <Col key={product.id} xs={24} sm={12} md={6} lg={3}>
              <Card
                hoverable
                cover={
                  <img
                    alt={product.title}
                    src={product.image}
                    className="h-40 object-contain p-4"
                  />
                }
              >
                <Card.Meta
                  title={
                    <div className="text-sm truncate">{product.title}</div>
                  }
                  description={
                    <div>
                      <div className="text-lg font-bold text-red-600">
                        ${product.price}
                      </div>
                      <Button
                        type="primary"
                        block
                        size="small"
                        onClick={() => handleAddToCart(product)}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  }
                />
                <Link to={`/products/${product.id}`}>
                  <Button type="link" size="small" block>
                    View Details
                  </Button>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default React.memo(HomePage);