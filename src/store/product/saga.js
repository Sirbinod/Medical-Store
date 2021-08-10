import {takeEvery, call, put} from "redux-saga/effects";
import {productListapi} from "../../utility/api";
import {normalGet} from "../../utility/requiest";
import {productFetchFail, productFetchSuccess} from "./action";
import {PRODUCT_FETCH_START} from "./actionType";

function* fetchProduct() {
  try {
    const products = yield call(normalGet(productListapi));
    console.log(products, "products here");
    yield put(productFetchSuccess(products));
  } catch (error) {
    yield put(productFetchFail(error));
  }
}
export function* waitForFetchProducts() {
  yield takeEvery(PRODUCT_FETCH_START, fetchProduct);
}

function* ProductSaga() {
  yield all(waitForFetchProducts);
}
export default ProductSaga;
