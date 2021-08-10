import {createStore, applyMiddleware, compose} from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers";
// import thunk from "redux-thunk";
// import {applyMiddleware, createStore, compose} from "redux";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

export default store;
