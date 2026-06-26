import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Layout, Typography, Divider } from 'antd';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import { searchMoviesRequest } from '../redux/slices/movieSlice';

const { Header, Content } = Layout;
const { Title } = Typography;

const HomePage = () => {
  const dispatch = useDispatch();

  // Tải dữ liệu mặc định khi component mount
  useEffect(() => {
    dispatch(searchMoviesRequest('batman'));
  }, [dispatch]);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ background: '#fff', padding: '0 24px' }}>
        <Title level={2} style={{ margin: '16px 0' }}>
          🎬 Tìm kiếm phim
        </Title>
      </Header>
      <Content style={{ padding: '24px 48px' }}>
        <SearchBar />
        <Divider />
        <MovieList />
      </Content>
    </Layout>
  );
};

export default React.memo(HomePage);