import {combineReducers} from "redux";
import productreducer from "./product";

const rootreducer = combineReducers({
  product: productreducer,
});

export default rootreducer;
