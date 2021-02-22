import { combineReducers } from "redux";
import login from "./login_reducer";
const rootReducer = combineReducers({
  userInfo: login,
});

export default rootReducer;
