import {takeLatest} from "redux-saga/effects";
import {GET_USER} from "../action/actionType";
import {fatchProduct} from "./productSaga";

export function* watcherSaga() {
  console.log("whatt jklk ljlk ");
  yield takeLatest(GET_USER, fatchProduct);
}
