import {popularProductapi} from "../../utility/api";
import {normalGet} from "../../utility/requiest";
import {POPULAR_PRODUCT_FETCH} from "./actionType";
import {productFetchFail, productFetchStart} from "./productAction";

export const popularProductFetch = (data) => {
  return {
    type: POPULAR_PRODUCT_FETCH,
    payload: data,
  };
};

export const popularProduct = () => async (dispath) => {
  dispath(productFetchStart());
  try {
    const res = await normalGet(popularProductapi);
    dispath(popularProductFetch(res.data));
  } catch (err) {
    dispath(productFetchFail(err));
  }
};
