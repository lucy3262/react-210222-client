import React from "react";
import logo from "./images/logo.png";
import "./login.less";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import { connect } from "react-redux";
import { dispatchLogin } from "./../../redux/actions/login_action";
import checkLogin from "./../../highComponents/check_login";
// import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const { Item } = Form;
const Login = (props) => {
  const { dispatchLogin } = props;
  const onFinish = async (values) => {
    const res = await dispatchLogin(values);
    if (res) {
      props.history.push("/admin");
    }
  };

  const checkState = () => {
    console.log(props.login);
  };
  // if (props.userInfo.isLogin) {
  //   return <Redirect to="/home" />;
  // }

  return (
    <div id="login">
      <div className="header">
        <img src={logo} alt="logo" />
        <h1>商品管理系统</h1>
      </div>
      <div className="content">
        <h1>用户登录</h1>

        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Item>
          <Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Item>

          <Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
          </Item>
        </Form>

        <Button onClick={checkState} className="login-form-button">
          Log in
        </Button>
      </div>
    </div>
  );
};

export default checkLogin(
  connect(
    (state) => ({
      isLogin: state.userInfo.isLogin,
    }),
    (dispatch) => ({ dispatchLogin: (v) => dispatch(dispatchLogin(v)) })
  )(Login)
);
