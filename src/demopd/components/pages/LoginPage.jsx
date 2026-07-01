import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Card, Typography, Alert, Row, Col } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { loginRequest, clearError } from "../../redux/slices/authSlice";

const { Title } = Typography;

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, loading, error } = useSelector(
    (state) => state.auth
  );
  const [form] = Form.useForm();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
    return () => {
      dispatch(clearError());
    };
  }, [isAuthenticated, navigate, dispatch]);

  const onFinish = (values) => {
    dispatch(
      loginRequest({
        username: values.username,
        password: values.password,
      })
    );
  };

  return (
    <Row>
      <Col span={12} offset={6}>
        <Card className="w-full max-w-md">
          <div className="text-center mb-6">
            <Title level={2}>Login</Title>
            <p className="text-gray-500">Sign in to your account</p>
          </div>

          {error && (
            <Alert
              message="Login Failed"
              description={error}
              type="error"
              showIcon
              className="mb-4"
            />
          )}

          <Form
            form={form}
            name="login"
            onFinish={onFinish}
            layout="vertical"
            size="large"
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="Username"
                disabled={loading}
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Password"
                disabled={loading}
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading} block>
                Sign In
              </Button>
            </Form.Item>

            <div className="text-center">
              <span className="text-gray-500">Demo credentials: </span>
              <span className="text-sm text-gray-600">
                username: <strong>johnd</strong>, password:{" "}
                <strong>m38rmF$</strong>
              </span>
            </div>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default React.memo(LoginPage);
