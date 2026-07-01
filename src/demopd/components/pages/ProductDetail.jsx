import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Card, Button, Spin, Rate, Typography, Row, Col, Image, 
  Descriptions, Tag, Space, message 
} from 'antd';
import { 
  ShoppingCartOutlined, 
  ArrowLeftOutlined,
  MinusOutlined,
  PlusOutlined 
} from '@ant-design/icons';
import { fetchProductByIdRequest, clearSelectedProduct } from '../../redux/slices/productSlice';
import { addToCart } from '../../redux/slices/cartSlice';

const { Title, Paragraph } = Typography;

const ProductDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { selectedProduct, loading } = useSelector((state) => state.products);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(fetchProductByIdRequest(id));
    return () => {
      dispatch(clearSelectedProduct());
    };
  }, [dispatch, id]);

  const handleAddToCart = () => {
    if (selectedProduct) {
      dispatch(addToCart({
        productId: selectedProduct.id,
        title: selectedProduct.title,
        price: selectedProduct.price,
        quantity: quantity,
        image: selectedProduct.image,
      }));
      message.success(`Added ${quantity} item(s) to cart!`);
    }
  };

  const handleQuantityChange = (type) => {
    if (type === 'increase') {
      setQuantity(prev => prev + 1);
    } else if (type === 'decrease' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Spin size="large" tip="Loading product details..." />
      </div>
    );
  }

  if (!selectedProduct) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <Button 
        icon={<ArrowLeftOutlined />} 
        onClick={() => navigate('/products')}
        className="mb-4"
      >
        Back to Products
      </Button>

      <Row gutter={[24, 24]}>
        <Col xs={24} md={10}>
          <Card>
            <Image
              src={selectedProduct.image}
              alt={selectedProduct.title}
              className="w-full object-contain"
              style={{ height: '400px' }}
            />
          </Card>
        </Col>
        <Col xs={24} md={14}>
          <Card>
            <Title level={2}>{selectedProduct.title}</Title>
            <Space className="mb-4">
              <Rate disabled defaultValue={selectedProduct.rating?.rate} />
              <span className="text-gray-500">
                ({selectedProduct.rating?.count || 0} reviews)
              </span>
            </Space>
            
            <Descriptions column={1} className="mb-4">
              <Descriptions.Item label="Category">
                <Tag color="blue">{selectedProduct.category}</Tag>
              </Descriptions.Item>
              <Descriptions.Item label="Price">
                <Title level={3} className="text-red-600">
                  ${selectedProduct.price}
                </Title>
              </Descriptions.Item>
              <Descriptions.Item label="Description">
                <Paragraph>{selectedProduct.description}</Paragraph>
              </Descriptions.Item>
            </Descriptions>

            <div className="flex items-center gap-4 mb-4">
              <span className="font-medium">Quantity:</span>
              <Button 
                icon={<MinusOutlined />} 
                onClick={() => handleQuantityChange('decrease')}
              />
              <span className="text-lg font-bold w-8 text-center">{quantity}</span>
              <Button 
                icon={<PlusOutlined />} 
                onClick={() => handleQuantityChange('increase')}
              />
            </div>

            <Button
              type="primary"
              size="large"
              icon={<ShoppingCartOutlined />}
              onClick={handleAddToCart}
              className="w-full"
            >
              Add to Cart
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default React.memo(ProductDetail);