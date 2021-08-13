import {call, put} from "redux-saga/effects";

import {productListapi} from "../../utility/api";
import {normalGet} from "../../utility/requiest";
import {setUser} from "../action/productAction";

export function* fatchProduct(action) {
  try {
    const response = yield call(normalGet(productListapi));
    console.log(response);

    yield put(setUser("data"));
  } catch (error) {
    console.log(error);
  }
}
