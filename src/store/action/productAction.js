import {
  latestProductapi,
  mostDiscountapi,
  productListapi,
} from "../../utility/api";
import { normalGet } from "../../utility/requiest";
import { popularProductapi } from "../../utility/api";

import {
  PRODUCT_FETCH_START,
  PRODUCT_FETCH_SUCCESS,
  PRODUCT_FETCH_FAIL,
  POPULAR_PRODUCT_SUCCESS,
  DISCOUNT_PRODUCT_SUCCESS,
  LATEST_PRODUCT_SUCCESS,
} from "./actionType";

export const productFetchStart = () => {
  return {
    type: PRODUCT_FETCH_START,
  };
};

export const productFetchSuccess = (data) => {
  return {
    type: PRODUCT_FETCH_SUCCESS,
    payload: data,
  };
};
export const productFetchFail = (error) => {
  return {
    type: PRODUCT_FETCH_FAIL,
    payload: error,
  };
};

export const popularProductSuccess = (data) => {
  return {
    type: POPULAR_PRODUCT_SUCCESS,
    payload: data,
  };
};

export const discountProductSuccess = (data) => {
  return {
    type: DISCOUNT_PRODUCT_SUCCESS,
    payload: data,
  };
};

export const latestProductSuccess = (data) => {
  return {
    type: LATEST_PRODUCT_SUCCESS,
    payload: data,
  };
};

//list product
export const productFetch = () => async (dispatch) => {
  dispatch(productFetchStart());
  try {
    const res = await normalGet(productListapi);
    dispatch(productFetchSuccess(res.data.data.docs));
  } catch (err) {
    dispatch(productFetchFail(err));
  }
};

//popular product
export const popularProduct = () => async (dispatch) => {
  dispatch(productFetchStart());
  try {
    const res = await normalGet(popularProductapi);

    dispatch(popularProductSuccess(res.data.data));
  } catch (err) {
    dispatch(productFetchFail(err));
  }
};

//discount product
export const discountProduct = () => async (dispatch) => {
  dispatch(productFetchStart());
  try {
    const res = await normalGet(mostDiscountapi);
    dispatch(discountProductSuccess(res.data.data));
  } catch (error) {
    dispatch(productFetchFail(error));
  }
};

//latest product
export const latestProducts = () => async (dispatch) => {
  dispatch(productFetchStart());
  try {
    const res = await normalGet(latestProductapi);
    dispatch(latestProductSuccess(res.data));
  } catch (error) {
    dispatch(productFetchFail(error));
  }
};
