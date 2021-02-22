import React from "react";
import { Button } from "antd";
import { connect } from "react-redux";
import { deleteUserInfo } from "../../redux/actions/login_action";
import { withRouter } from "react-router-dom";
import "./header.less";
import menuList from "@config/menuConfig";
const Header = (props) => {
  const handleLogout = () => {
    props.deleteUserInfo();
  };

  const getBreadCrumb = (menuList) => {
    const title = [];
    const pathArr = props.history.location.pathname.split("/").slice(2);

    const f = (menuList) =>
      menuList.forEach((item, index) => {
        pathArr.forEach((path, idx) => {
          if (item.key === path) {
            title.push(item.title);
          }
        });
        if (item.children instanceof Array) {
          f(item.children);
        }
      });
    f(menuList);

    return title.join("/");
  };

  return (
    <div className="header">
      <div className="header-top">
        welcome,xxx
        <Button type="link" onClick={handleLogout}>
          退出
        </Button>
      </div>
      <div className="header-bottom">
        <div className="header-bottom-left">{getBreadCrumb(menuList)}</div>

        <div className="header-bottom-right">
          <span>currentTime</span>
          <img src="" alt="" />
          <span>weather</span>
        </div>
      </div>
    </div>
  );
};

export default withRouter(connect(() => {}, { deleteUserInfo })(Header));
