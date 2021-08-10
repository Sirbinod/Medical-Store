import {productListapi} from "../../utility/api";
import {normalGet} from "../../utility/requiest";
import {
  PRODUCT_FETCH_START,
  PRODUCT_FETCH_SUCCESS,
  PRODUCT_FETCH_FAIL,
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

// export const productFetch = () => async (dispath) => {
//   dispath(productFetchStart());
//   try {
//     const response = await normalGet(productListapi);
//     console.log(response.data.success, "whlknakjlfndkjnkjdfnk");
//     if (response.data.success) {
//       dispath(productFetchSuccess(response.data.data));
//     } else {
//       dispath(productFetchFail(response.message));
//     }
//   } catch (err) {
//     dispath(productFetchFail(err));
//   }
// };
