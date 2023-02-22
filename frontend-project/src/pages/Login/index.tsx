import React, { useState } from 'react';
import axios from 'axios';
import qs from 'qs';
import { Button, Form, Input, message } from 'antd';
import './style.css';
import { Navigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    axios.post('/api/login', qs.stringify({
      password: values.password
    }), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }).then(res => {
      if (res.data?.data) {
        setIsLogin(true);
      } else {
        message.error('登陆失败');
      }
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      {
        isLogin ? (<Navigate to="/" replace />) : (
          <div className='login-page'>
            <Form
              name="basic"
              form={form}
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 18 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="密码"
                name="password"
                rules={[{ required: true, message: '请输入登陆密码！' }]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  登陆
                </Button>
              </Form.Item>
            </Form>
          </div>
        )
      }
    </>
  )
};

export default LoginPage;