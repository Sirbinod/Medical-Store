import {combineReducers} from "redux";
import PopularProductReducer from "./popularProductReducer";
import ProductReducer from "./productReducer";

const rootReducer = combineReducers({
  product: ProductReducer,
  popularProduct: PopularProductReducer,
});
export default rootReducer;
