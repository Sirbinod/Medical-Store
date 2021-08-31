import { cartapi, cartDeleteapi } from "../../utility/api";
import { authDelete, authGet, authPost } from "../../utility/requiest";
import {
  CART_START,
  ADD_TO_CART,
  DECREASE_QUANTITY,
  DELETE_FROM_CART,
  CART_DATA_FETCH,
  CART_FAIL,
} from "./actionType";

export const cartStart = () => {
  return {
    type: CART_START,
  };
};
export const cartFail = (data) => {
  return {
    type: CART_FAIL,
    payload: data,
  };
};
// add to cart
export const addToCart = (data, quantity, product) => {
  console.log(data);
  return {
    type: ADD_TO_CART,
    payload: { data, quantity, product },
  };
};

export const addCart = (_id, token, addToast) => async (dispatch) => {
  console.log(_id, "cart Id hrereer");
  const data = { productId: _id, quantity: "1" };
  // dispatch(cartStart());
  try {
    const res = await authPost(cartapi, data, token);
    // dispatch(addToCart(res.data, 1, product));
    dispatch(cartDate(token));
    if (addToast) {
      addToast("Added To Cart", {
        appearance: "success",
        autoDismiss: true,
        location: "topleft",
      });
    }
  } catch (error) {
    dispatch(cartFail(error));
  }
};

// fetch cart data

export const cartDataFetch = (data) => {
  return {
    type: CART_DATA_FETCH,
    payload: data,
  };
};

export const cartDate = (token) => async (dispatch) => {
  dispatch(cartStart());
  try {
    const res = await authGet(cartapi, token);
    dispatch(cartDataFetch(res.data));
  } catch (error) {
    dispatch(cartFail(error));
  }
};

// decrease from cart

export const decreaseQuantity = (item, addToast) => (dispatch) => {
  if (addToast) {
    addToast("Item Decremented From Cart", {
      appearance: "warning",
      autoDismiss: true,
    });
  }
  dispatch({ type: DECREASE_QUANTITY, payload: item });
};

//  delete from cart

// export const deleteFromCart = (item, addToast) => (dispatch) => {
//   if (addToast) {
//     addToast("Removed From Cart", { appearance: "error", autoDismiss: true });
//   }
//   dispatch({ type: DELETE_FROM_CART, payload: item });
// };

export const deleteFromCart = (data) => {
  return {
    type: DELETE_FROM_CART,
    payload: data,
  };
};

export const deleteCart = (token, data, addToast) => async (dispatch) => {
  try {
    const res = await authDelete(cartDeleteapi(data.product._id, true), token);
    dispatch(deleteFromCart(data));
    if (addToast) {
      addToast("Item Delete From Cart", {
        appearance: "warning",
        autoDismiss: true,
      });
    }
  } catch (error) {
    dispatch(cartFail(error));
  }
};
