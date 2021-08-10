import {combineReducers} from "redux";

// Front
import Layout from "./layout/reducer";
import Products from "./product/reducer";

const rootReducer = combineReducers({
  // public
  Layout,
  Products,
});

export default rootReducer;
