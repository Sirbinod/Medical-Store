import {
  LOGIN_START,
  LOGIN_SUCCESS,
  SIGNUP_START,
  LOGOUT,
  ADD_PRECEPTION,
} from "../action/actionType";

let user = JSON.parse(localStorage.getItem("user"));

const initState = {
  isLoggedIn: user ? true : false,
  loading: false,
  success: false,
  user: user,
  error: null,
  modelOpen: false,
  modelROpen: false,
  modelPrecription: false,
};

const ProfileReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        modelOpen: !state.modelOpen,
      };
    case LOGIN_SUCCESS:
      const user = action.payload.data;
      user.token = action.payload.data.token;
      localStorage.setItem("user", JSON.stringify(user));
      return {
        ...state,
        isLoggedIn: true,
        loading: false,
        user: user,
        success: true,
      };
    case SIGNUP_START:
      return {
        ...state,
        modelROpen: !state.modelROpen,
      };

    case LOGOUT:
      localStorage.clear();
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case ADD_PRECEPTION:
      return {
        ...state,
        modelPrecription: !state.modelPrecription,
      };
    default:
      return state;
  }
};
export default ProfileReducer;
