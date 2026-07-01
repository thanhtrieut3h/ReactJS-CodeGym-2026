import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Card, Typography, Descriptions, Button, Spin, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { fetchUserByIdRequest } from '../../redux/slices/userSlice';

const { Title } = Typography;

const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser, loading } = useSelector((state) => state.users);
  const { user: authUser, isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    // Using a demo user ID (1) since we don't have real user data
    dispatch(fetchUserByIdRequest(1));
  }, [dispatch, isAuthenticated, navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Spin size="large" tip="Loading profile..." />
      </div>
    );
  }

  if (!currentUser) {
    return <div>User not found</div>;
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <Card>
        <div className="flex items-center gap-6 mb-6">
          <Avatar size={80} icon={<UserOutlined />} />
          <div>
            <Title level={2}>{currentUser.name?.firstname} {currentUser.name?.lastname}</Title>
            <p className="text-gray-500">@{currentUser.username}</p>
          </div>
        </div>

        <Descriptions bordered column={{ xs: 1, sm: 2 }}>
          <Descriptions.Item label="Email">{currentUser.email}</Descriptions.Item>
          <Descriptions.Item label="Phone">{currentUser.phone}</Descriptions.Item>
          <Descriptions.Item label="City">{currentUser.address?.city}</Descriptions.Item>
          <Descriptions.Item label="Street">{currentUser.address?.street}</Descriptions.Item>
          <Descriptions.Item label="Number">{currentUser.address?.number}</Descriptions.Item>
          <Descriptions.Item label="Zipcode">{currentUser.address?.zipcode}</Descriptions.Item>
        </Descriptions>

        <div className="mt-6 flex gap-4">
          <Button type="primary">Edit Profile</Button>
          <Button onClick={() => navigate('/')}>Back to Home</Button>
        </div>
      </Card>
    </div>
  );
};

export default React.memo(UserProfile);