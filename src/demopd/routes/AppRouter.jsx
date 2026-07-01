import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Layout } from 'antd';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import HomePage from '../components/pages/HomePage';
import ProductList from '../components/pages/ProductList';
import ProductDetail from '../components/pages/ProductDetail';
import CartPage from '../components/pages/CartPage';
import LoginPage from '../components/pages/LoginPage';
import UserProfile from '../components/pages/UserProfile';
import NotFound from '../components/pages/NotFound';

const { Content } = Layout;

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Layout className="min-h-screen">
        <Header />
        <Content className="p-6 bg-gray-50">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route 
              path="/profile" 
              element={
                <PrivateRoute>
                  <UserProfile />
                </PrivateRoute>
              } 
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Content>
        <Footer />
      </Layout>
    </BrowserRouter>
  );
};

export default AppRouter;