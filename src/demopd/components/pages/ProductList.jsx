import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
  Row, Col, Card, Input, Select, Button, Spin, Pagination, Empty 
} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { 
  fetchProductsRequest, 
  fetchCategoriesRequest 
} from '../../redux/slices/productSlice';
import { addToCart } from '../../redux/slices/cartSlice';

const { Search } = Input;
const { Option } = Select;

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, categories, loading } = useSelector((state) => state.products);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;

  useEffect(() => {
    dispatch(fetchProductsRequest());
    dispatch(fetchCategoriesRequest());
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

  // Filter products
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory
      ? product.category === selectedCategory
      : true;
    return matchesSearch && matchesCategory;
  });

  // Pagination
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + pageSize);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Spin size="large" tip="Loading..." />
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-4">Products</h1>
        <div className="flex flex-wrap gap-4">
          <Search
            placeholder="Search products..."
            allowClear
            enterButton={<SearchOutlined />}
            size="large"
            className="flex-1 min-w-[200px]"
            onSearch={(value) => setSearchTerm(value)}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Select
            placeholder="Select category"
            size="large"
            className="w-48"
            allowClear
            onChange={(value) => setSelectedCategory(value)}
          >
            {categories.map((category) => (
              <Option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Option>
            ))}
          </Select>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <Empty description="No products found" />
      ) : (
        <>
          <Row gutter={[16, 16]}>
            {paginatedProducts.map((product) => (
              <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt={product.title}
                      src={product.image}
                      className="h-48 object-contain p-4"
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
                        <div className="text-xs text-gray-500 mb-2">
                          {product.category}
                        </div>
                        <div className="flex gap-2">
                          <Button
                            type="primary"
                            size="small"
                            className="flex-1"
                            onClick={() => handleAddToCart(product)}
                          >
                            Add to Cart
                          </Button>
                          <Link to={`/products/${product.id}`}>
                            <Button size="small">View</Button>
                          </Link>
                        </div>
                      </div>
                    }
                  />
                </Card>
              </Col>
            ))}
          </Row>
          <div className="mt-6 flex justify-center">
            <Pagination
              current={currentPage}
              total={filteredProducts.length}
              pageSize={pageSize}
              onChange={(page) => setCurrentPage(page)}
              showSizeChanger={false}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default React.memo(ProductList);