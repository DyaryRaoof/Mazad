import {
  OPEN_PROFILE_POPOVER,
  CLOSE_PROFILE_POPOVER,
  OPEN_MESSAGE_POPOVER,
  CLOSE_MESSAGE_POPOVER,
} from "../actions/types";

const popoverReducer = (
  state = { isProfilePopoverOpen: false, isMessagePopoverOpen: false },
  action
) => {
  switch (action.type) {
    case OPEN_PROFILE_POPOVER:
      return { ...state, isProfilePopoverOpen: true };
    case CLOSE_PROFILE_POPOVER:
      return { ...state, isProfilePopoverOpen: false };
    case OPEN_MESSAGE_POPOVER:
      return { ...state, isMessagePopoverOpen: true };
    case CLOSE_MESSAGE_POPOVER:
      return { ...state, isMessagePopoverOpen: false };
    default:
      return state;
  }
};

export default popoverReducer;
