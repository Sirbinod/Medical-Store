import { loginapi } from "../../utility/api";
import { authPost, normalPost } from "../../utility/requiest";
import { LOGIN_START, LOGIN_SUCCESS, SIGNUP_START, LOGOUT } from "./actionType";

export const loginOpen = () => {
  return {
    type: LOGIN_START,
  };
};

export const loginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};

export const signupStart = () => {
  return {
    type: SIGNUP_START,
  };
};

export const logOut = () => {
  return {
    type: LOGOUT,
  };
};

//login
export const login = (data) => {
  return normalPost(data, loginapi);
};

//logout

export const logout = () => async (dispatch) => {
  dispatch(logOut());
};
