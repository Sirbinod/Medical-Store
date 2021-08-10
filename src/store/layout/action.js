import {SHOW_RIGHT_SIDEBAR} from "./actionTypes";

export const showRightSidebarAction = (isopen) => ({
  type: SHOW_RIGHT_SIDEBAR,
  payload: isopen,
});
