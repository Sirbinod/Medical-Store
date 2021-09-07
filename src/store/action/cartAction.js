import { cartapi, cartDeleteapi } from "../../utility/api";
import { authDelete, authGet, authPost } from "../../utility/requiest";
import {
  CART_START,
  ADD_TO_CART,
  DECREASE_QUANTITY,
  DELETE_FROM_CART,
  CART_DATA_FETCH,
  CART_FAIL,
  CART_EMPTY,
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
  return {
    type: ADD_TO_CART,
    payload: { data, quantity, product },
  };
};

export const addCart = (_id, token, addToast) => async (dispatch) => {
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
  } catch (err) {
    dispatch(
      cartFail(
        err.response
          ? err.response.data.message
          : "Unable to add in cart at this moment. Please try again",
      ),
    );
  }
};

// fetch cart data

export const cartDataFetch = (data) => {
  return {
    type: CART_DATA_FETCH,
    payload: data,
  };
};

export const cartEpty = () => {
  return {
    type: CART_EMPTY,
  };
};

export const cartDate = (token) => async (dispatch) => {
  dispatch(cartStart());
  try {
    const res = await authGet(cartapi, token);
    dispatch(cartDataFetch(res.data));
  } catch (err) {
    dispatch(
      cartFail(
        err.response
          ? err.response.data.message
          : "Unable to fetch item from cart  at this moment. Please try again",
      ),
    );
  }
};

// decrease from cart



export const decreaseQuantity = (data) => (dispatch) => {
  dispatch({ type: DECREASE_QUANTITY, payload: data });
};

export const cartDecrease = (token, data, addToast) => async (dispatch) => {
  try {
    const res = await authDelete(cartDeleteapi(data.product._id, false), token);
    dispatch(decreaseQuantity(token));
    if (addToast) {
      addToast("Item Decremented From Cart", {
        appearance: "warning",
        autoDismiss: true,
      });
    }
  } catch (err) {
    dispatch(
      cartFail(
        err.response
          ? err.response.data.message
          : "Unable to decrease cart at this moment. Please try again",
      ),
    );
  }
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

    dispatch(cartDate(token));
    if (addToast) {
      addToast("Item Delete From Cart", {
        appearance: "warning",
        autoDismiss: true,
      });
    }
  } catch (err) {
    dispatch(
      cartFail(
        err.response
          ? err.response.data.message
          : "Unable to delete cart at this moment. Please try again",
      ),
    );
  }
};
