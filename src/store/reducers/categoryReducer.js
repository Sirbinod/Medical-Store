import {
  CATEGORY_FETCH_START,
  CATEGORY_FETCH_SUCCESS,
  CATEGORY_FETCH_FAIL,
} from "../action/actionType";

const initState = { loading: false, success: false, category: [], error: null };

const CategoryReducer = (state = initState, action) => {
  switch (action.type) {
    case CATEGORY_FETCH_START:
      return {
        ...state,
        loading: true,
      };
    case CATEGORY_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        category: action.payload,
      };
    case CATEGORY_FETCH_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default CategoryReducer;
