import {all, fork} from "redux-saga/effects";

//public

import LayoutSaga from "./layout/saga";
import ProductSaga from "./product/reducer";

export default function* rootSaga() {
  yield all([
    //public

    LayoutSaga(),
    ProductSaga(),
  ]);
}
