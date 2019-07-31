import { combineReducers } from "redux";
import todos from "./todos";
import users from "./users";
import ui from "./ui";

export default combineReducers({
  todos,
  users,
  ui
});
