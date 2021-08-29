import { categoryapi } from "../../utility/api";
import { normalGet } from "../../utility/requiest";
import {
  CATEGORY_FETCH_START,
  CATEGORY_FETCH_SUCCESS,
  CATEGORY_FETCH_FAIL,
} from "./actionType";

export const categoryFetchStart = () => {
  return {
    type: CATEGORY_FETCH_START,
  };
};

export const categoryFetchSuccess = (data) => {
  return {
    type: CATEGORY_FETCH_SUCCESS,
    payload: data,
  };
};

export const categoryFetchFail = (data) => {
  return {
    type: CATEGORY_FETCH_FAIL,
    payload: data,
  };
};

export const categoryFetch = () => async (dispatch) => {
  dispatch(categoryFetchStart());
  try {
    const res = await normalGet(categoryapi);
    dispatch(categoryFetchSuccess(res.data));
  } catch (error) {
    dispatch(categoryFetchFail(error));
  }
};
