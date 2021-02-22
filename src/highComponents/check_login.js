import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export default function checkLogin(CurrentComponent) {
  function FinalComponent(props) {
    const { isLogin } = props;
    const { ...params } = props;
    const pathname = props.history.location.pathname;
    debugger;
    if (pathname === "/login" && isLogin) {
      return <Redirect to="/admin" />;
    }
    if (pathname !== "/login" && !isLogin) {
      return <Redirect to="/login" />;
    }

    return <CurrentComponent {...params} />;
  }

  return connect(
    (state) => ({
      isLogin: state.userInfo.isLogin,
    }),
    {}
  )(FinalComponent);
}
