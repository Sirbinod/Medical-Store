import {SHOW_RIGHT_SIDEBAR} from "./actionTypes";

const initState = {showRightSidebar: false};

const Layout = (state = initState, action) => {
  switch (action.type) {
    case SHOW_RIGHT_SIDEBAR:
      return {
        ...state,
        showRightSidebar: action.payload,
      };
    default:
      return state;
  }
};
export default Layout;
