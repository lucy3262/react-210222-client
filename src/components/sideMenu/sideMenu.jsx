import React from "react";
import { Menu } from "antd";
// import { MailOutlined, AppstoreOutlined } from "@ant-design/icons";
import { Link, withRouter } from "react-router-dom";
import logo from "@static/images/logo.png";
import "./sideMenu.less";
import menuList from "@config/menuConfig";
const { SubMenu } = Menu;

const SideMenu = (props) => {
  const path = props.history.location.pathname;
  const defaultSelectedKeys = path.split("/").reverse()[0];
  const defaultOpenKeys = path.split("/")[2];

  // const openPath = path.sp;
  const getMenu = (menuList) =>
    menuList.map((item, index) => {
      if (item.children instanceof Array) {
        return (
          <SubMenu icon={item.icon} title={item.title} key={item.key}>
            {getMenu(item.children)}
          </SubMenu>
        );
      }

      return (
        <Menu.Item key={item.key} icon={item.icon}>
          <Link to={item.path}>{item.title}</Link>
        </Menu.Item>
      );
    });

  return (
    <div className="left-nav">
      <Link className="left-nav-link" to="/admin/home">
        <img src={logo} alt="logo" />
        <h1>管理后台</h1>
      </Link>
      <Menu
        defaultSelectedKeys={[defaultSelectedKeys]}
        defaultOpenKeys={[defaultOpenKeys]}
        mode="inline"
        theme="dark"
      >
        {getMenu(menuList)}
      </Menu>
    </div>
  );
};

export default withRouter(SideMenu);
