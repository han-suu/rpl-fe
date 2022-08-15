import Image from "next/image";

import styled from "styled-components";

import "antd/dist/antd.css";
import { Card, Input, Button, Typography, Form } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

//Extending ANTD import
const { Title } = Typography;

//Import Components
import WebsiteHead from "../components/websiteHead";

//Styling Components
const Background = styled.div`
  background-color: rgb(19, 77, 203);
  width: 100vw;
  height: 100vh;
`;

const LoginCard = styled(Card)`
  position: relative;
  top: 15%;
  left: 40%;
  padding: 10px;

  width: 20vw;
  height: 30vw;
  border-radius: 10px;
  text-align: center;
`;

const LoginForm = styled(Form)`
  padding-top: 5vh;
  text-align: left;
`;

const LoginInput = styled(Input)`
  margin-bottom: 2vh;
  border-bottom: 1px solid lightgray;
  &:hover,
  &:focus {
    border-bottom: 1px solid black;
  }
`;

const LoginInputPassword = styled(Input.Password)`
  margin-bottom: 2vh;
  border-bottom: 1px solid lightgray;
  &:hover,
  &:focus {
    border-bottom: 1px solid black;
  }
`;

function Login() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    alert("Failed:", errorInfo);
  };

  return (
    <>
      <WebsiteHead
        title="Login to SC SIM"
        desc="Login page to enter Startup Campus Sistem Informasi"
      />
      <Background>
        <LoginCard>
          <Image
            src="/images/Startup-Campus-Site-Logo.png"
            alt="Startup Campus Logo"
            width={143}
            height={47}
          />
          <Title level={4}>Login to MIS</Title>
          <LoginForm
            name="login form"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            Username
            <Form.Item name="username">
              <LoginInput placeholder="Type your username" bordered={false} />
            </Form.Item>
            Password
            <Form.Item name="password">
              <LoginInputPassword
                placeholder="Type your password"
                bordered={false}
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" shape="round" block htmlType="submit">
                Login
              </Button>
            </Form.Item>
          </LoginForm>
        </LoginCard>
      </Background>
    </>
  );
}

export default Login;