import React from 'react';
import { Layout } from 'antd';

const { Footer: AntFooter } = Layout;

const Footer = () => {
  return (
    <AntFooter className="text-center border-t">
      ShopEase ©{new Date().getFullYear()} Created with React & Ant Design
    </AntFooter>
  );
};

export default React.memo(Footer);