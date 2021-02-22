import { SAVE_USERINFO, DELETE_USERINFO } from "./../action_type";
import { reqLogin } from "./../../api";

export const saveUserInfo = (data) => {
  localStorage.setItem("user", JSON.stringify(data.user));
  localStorage.setItem("token", data.token);
  return {
    type: SAVE_USERINFO,
    data,
  };
};

export const deleteUserInfo = (data) => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  return {
    type: DELETE_USERINFO,
    data: "",
  };
};

export const dispatchLogin = (values) => async (dispatch) => {
  const res = await reqLogin(values);
  const { msg, data } = res;
  if (!msg) {
    dispatch(saveUserInfo(data));
    return true;
  }
};
