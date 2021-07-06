import { TOGGLE_MESSAGE_MODAL } from '../actions/types';

const loginModalReducer = (state = { isModalOpen: false }, action) => {
  switch (action.type) {
    case TOGGLE_MESSAGE_MODAL:
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
        payload: action.payload,
      };
    default:
      return state;
  }
};

export default loginModalReducer;
