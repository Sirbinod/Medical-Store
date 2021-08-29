import {combineReducers} from "redux";
import cartReducer from "./cartReducer";
import CategoryReducer from "./categoryReducer";
import { reducer as formReducer } from "redux-form";

import ProductReducer from "./productReducer";
import ProfileReducer from "./profileReducer";

const rootReducer = combineReducers({
  product: ProductReducer,
  cart: cartReducer,

  category: CategoryReducer,
  profile: ProfileReducer,
  form: formReducer,
});
export default rootReducer;
