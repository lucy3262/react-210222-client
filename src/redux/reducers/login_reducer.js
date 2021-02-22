import { SAVE_USERINFO, DELETE_USERINFO } from "./../action_type";

//从localStorage中读取之前保存的用户信息（可能读不到，如读到了，就给redux初始化用）
const _user = JSON.parse(localStorage.getItem("user"));
const _token = localStorage.getItem("token");
const initState = {
  user: _user || {},
  token: _token || "",
  isLogin: _user && _token ? true : false,
};

export default function loginReducer(preState = initState, action) {
  const { type, data } = action;
  let newState = initState;

  switch (type) {
    case SAVE_USERINFO:
      newState = { user: data.user, token: data.token, isLogin: true };
      return newState;
    case DELETE_USERINFO:
      newState = { user: {}, token: data.token, isLogin: false };
      debugger;
      return newState;
    default:
      return preState;
  }
}
