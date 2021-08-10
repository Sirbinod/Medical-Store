import {all, call, fork, takeEvery} from "redux-saga/effects";

import {SHOW_RIGHT_SIDEBAR} from "./actionTypes";

/**
 * Toggle the class on body
 * @param {*} cssClass
 */
function manageBodyClass(cssClass, action = "toggle") {
  switch (action) {
    case "add":
      if (document.body) document.body.classList.add(cssClass);
      break;
    case "remove":
      if (document.body) document.body.classList.remove(cssClass);
      break;
    default:
      if (document.body) document.body.classList.toggle(cssClass);
      break;
  }

  return true;
}

function* showRightSidebar() {
  try {
    yield call(manageBodyClass, "right-bar-enabled", "add");
  } catch (error) {}
}

export function* watchShowRightSidebar() {
  yield takeEvery(SHOW_RIGHT_SIDEBAR, showRightSidebar);
}

function* LayoutSaga() {
  yield all([fork(watchShowRightSidebar)]);
}
export default LayoutSaga;
