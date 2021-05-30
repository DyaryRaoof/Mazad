import { TOGGLE_CHAT_BOX } from '../actions/types';

const chatBoxReducer = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_CHAT_BOX:
      return { ...state, isVisible: !state.isVisible };
    default:
      return state;
  }
};

export default chatBoxReducer;
