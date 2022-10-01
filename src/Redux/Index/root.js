import { combineReducers } from "redux";
import { Auth_R } from "../Reducers/index";

export default combineReducers({
  user: Auth_R,
});
