import { combineReducers } from "redux";

import posts from "./posts";
import { postData } from "./postData";

export default combineReducers({
  posts,
  postData,
});
