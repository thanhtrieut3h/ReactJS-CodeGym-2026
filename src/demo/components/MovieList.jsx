import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Card, Spin, Empty, Typography, Alert } from 'antd';
import { CalendarOutlined, StarOutlined } from '@ant-design/icons';

const { Text, Title } = Typography;
const { Meta } = Card;

const MovieList = () => {
  const { movies, loading, error, searchQuery, totalResults } = useSelector(
    (state) => state.movies
  );

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '50px 0' }}>
        <Spin size="large" tip="Đang tìm kiếm phim..." />
      </div>
    );
  }

  if (error) {
    return (
      <Alert
        message="Lỗi"
        description={error}
        type="error"
        showIcon
        style={{ marginBottom: 16 }}
      />
    );
  }

  if (!movies || movies.length === 0) {
    return (
      <Empty
        description={`Không tìm thấy phim nào cho từ khóa "${searchQuery}"`}
        style={{ padding: '40px 0' }}
      />
    );
  }

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <Text type="secondary">
          Tìm thấy {totalResults} kết quả cho từ khóa "{searchQuery}"
        </Text>
      </div>
      <Row gutter={[16, 24]}>
        {movies.map((movie) => (
          <Col key={movie.id} xs={24} sm={12} md={8} lg={6} xl={4}>
            <Card
              hoverable
              cover={
                <img
                  alt={movie.title}
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : '/placeholder-movie.jpg'
                  }
                  style={{ height: 300, objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.src = '/placeholder-movie.jpg';
                  }}
                />
              }
              style={{ height: '100%' }}
            >
              <Meta
                title={
                  <Title level={5} ellipsis>
                    {movie.title}
                  </Title>
                }
                description={
                  <div>
                    <div style={{ marginBottom: 8 }}>
                      <CalendarOutlined style={{ marginRight: 4 }} />
                      <Text type="secondary">
                        {movie.release_date ? movie.release_date.split('-')[0] : 'N/A'}
                      </Text>
                      <span style={{ marginLeft: 12 }}>
                        <StarOutlined style={{ color: '#fadb14', marginRight: 4 }} />
                        <Text type="secondary">
                          {movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}
                        </Text>
                      </span>
                    </div>
                    <Text type="secondary" ellipsis={{ rows: 2 }}>
                      {movie.overview || 'Không có mô tả'}
                    </Text>
                  </div>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default React.memo(MovieList);