import React from "react";
import checkLogin from "./../../highComponents/check_login";
import { connect } from "react-redux";
import { deleteUserInfo } from "../../redux/actions/login_action";
import { Layout } from "antd";
import "./admin.less";
import Header from "../../components/header/header";
import SideMenu from "../../components/sideMenu/sideMenu";
import { Route, Switch, Redirect } from "react-router-dom";
import Category from "@containers/category/category.jsx";
import Role from "@containers/role/role.jsx";
import Home from "@containers/home/home.jsx";
import User from "@containers/user/user.jsx";
import Product from "@containers/product/product.jsx";
// import axios from "@api/axios";
import { reqCategory } from "@api";

const { Footer, Sider, Content } = Layout;
const Admin = (props) => {
  console.log(props.userInfo.user.username);
  const handleDemo = async () => {
    const res = await reqCategory();
    console.log(res);
  };
  return (
    // const handleClick = () => {
    //   console.log("ddd");
    //   props.deleteUserInfo();
    // };

    <Layout className="layout">
      <Sider>
        <button onClick={handleDemo}>demo</button>
        <SideMenu />
      </Sider>
      <Layout>
        <Header />
        <Content className="content">
          <Switch>
            <Route path="/admin/pro_about/category" component={Category} />
            <Route path="/admin/pro_about/product" component={Product} />
            <Route path="/admin/home" component={Home} />
            <Route path="/admin/role" component={Role} />
            <Route path="/admin/user" component={User} />
            <Redirect to="/admin/home" />
          </Switch>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
    // <div>
    //   <Button onClick={handleClick}>TUICHU</Button>
    // </div>
  );
};
export default checkLogin(
  connect(
    (state) => ({
      userInfo: state.userInfo,
    }),
    { deleteUserInfo }
  )(Admin)
);
