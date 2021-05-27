import { CLOSE_LOGIN_MODAL, OPEN_LOGIN_MODAL } from "../actions/types";

const loginModalReducer = (state = { isModalOpen: false }, action) => {
  switch (action.type) {
    case OPEN_LOGIN_MODAL:
      return { ...state, isModalOpen: true };
    case CLOSE_LOGIN_MODAL:
      return { ...state, isModalOpen: false };
    default:
      return state;
  }
};

export default loginModalReducer;
