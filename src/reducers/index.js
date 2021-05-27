import { combineReducers } from "redux";
import loginModalReducer from "./loginModalReducer";
import popoverReducer from "./popoverReducer";

export default combineReducers({
  loginModal: loginModalReducer,
  popover: popoverReducer,
});
