import React, { useState } from 'react';
import { Input, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { searchMoviesRequest } from '../redux/slices/movieSlice';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    if (searchValue.trim()) {
      dispatch(searchMoviesRequest(searchValue.trim()));
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div style={{ marginBottom: 24 }}>
      <Space.Compact style={{ width: '100%' }}>
        <Input
          placeholder="Nhập tên phim cần tìm..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyUp={handleKeyPress}
          size="large"
          allowClear
        />
        <Button
          type="primary"
          icon={<SearchOutlined />}
          onClick={handleSearch}
          size="large"
        >
          Tìm kiếm
        </Button>
      </Space.Compact>
    </div>
  );
};

export default React.memo(SearchBar);