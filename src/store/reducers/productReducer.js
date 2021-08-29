import {
  PRODUCT_FETCH_START,
  PRODUCT_FETCH_SUCCESS,
  PRODUCT_FETCH_FAIL,
  POPULAR_PRODUCT_SUCCESS,
  DISCOUNT_PRODUCT_SUCCESS,
  LATEST_PRODUCT_SUCCESS,
} from "../action/actionType";
const initState = {
  loading: false,
  success: false,
  product: [],
  popular: [],
  mostDiscount: [],
  latestProduct: [],
  error: null,
};

const ProductReducer = (state = initState, action) => {
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
    case POPULAR_PRODUCT_SUCCESS:
      return {
        ...state,
        popular: action.payload,
        success: true,
        loading: false,
      };
    case DISCOUNT_PRODUCT_SUCCESS:
      return {
        ...state,
        mostDiscount: action.payload,
        success: true,
        loading: false,
      };
    case LATEST_PRODUCT_SUCCESS:
      return {
        ...state,
        latestProduct: action.payload,
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
export default ProductReducer;
