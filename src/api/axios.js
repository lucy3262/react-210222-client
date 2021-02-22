import axios from "axios";
import qs from "qs";
import store from "@redux/store";
import { message } from "antd";
import { deleteUserInfo } from "../redux/actions/login_action";

// axios.defaults.baseURL = "http://localhost:5000";
// 添加请求拦截器
axios.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    const { method, data } = config;
    if (method.toLowerCase() === "post" && typeof data === "object") {
      config.data = qs.stringify(data);
    }
    const { token } = store.getState().userInfo;
    if (token) {
      config.headers.Authorization = `atguigu_${token}`;
    }

    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response.data;
  },
  function (error) {
    if (error.response.status === 401) {
      message.error("身份验证失败，请重新登录");
      store.dispatch(deleteUserInfo());
    } else {
      // 对响应错误做点什么
      message.error("请求出错，联系管理员");
    }

    return new Promise(() => {});
  }
);

export default axios;
