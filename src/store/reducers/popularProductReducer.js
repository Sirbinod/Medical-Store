import {
  PRODUCT_FETCH_START,
  //   PRODUCT_FETCH_SUCCESS,
  PRODUCT_FETCH_FAIL,
  POPULAR_PRODUCT_FETCH,
} from "../action/actionType";
const initState = {
  loading: false,
  success: false,
  //   product: [],
  popular: [],
  error: null,
};

const PopularProductReducer = (state = initState, action) => {
  switch (action.type) {
    case PRODUCT_FETCH_START:
      return {
        ...state,
        loading: true,
      };

    case PRODUCT_FETCH_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case POPULAR_PRODUCT_FETCH:
      return {
        ...state,
        popular: action.payload,
        success: true,
        loading: false,
      };

    default:
      return state;
  }
};
export default PopularProductReducer;
