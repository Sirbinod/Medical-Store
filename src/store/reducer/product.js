import {
  PRODUCT_FETCH_START,
  PRODUCT_FETCH_SUCCESS,
  PRODUCT_FETCH_FAIL,
} from "../action/actionType";

const initState = {
  loading: false,
  success: false,
  product: [],
  error: null,
};

const Product = (state = initState, action) => {
  switch (action.type) {
    case PRODUCT_FETCH_START:
      return {
        ...state,
        loading: true,
      };
    case PRODUCT_FETCH_SUCCESS:
      return {
        ...state,
        product: action.payload,
        success: true,
        loading: false,
      };
    case PRODUCT_FETCH_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
export default Product;
