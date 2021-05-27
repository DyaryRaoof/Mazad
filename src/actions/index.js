import {
  CLOSE_LOGIN_MODAL,
  OPEN_LOGIN_MODAL,
  OPEN_PROFILE_POPOVER,
  CLOSE_PROFILE_POPOVER,
  OPEN_MESSAGE_POPOVER,
  CLOSE_MESSAGE_POPOVER,
} from "./types";

export const openLoginModal = () => {
  return {
    type: OPEN_LOGIN_MODAL,
  };
};

export const closeLoginModal = () => {
  return {
    type: CLOSE_LOGIN_MODAL,
  };
};

export const openProfilePopover = () => {
  return {
    type: OPEN_PROFILE_POPOVER,
  };
};

export const closeProfilePopover = () => {
  return {
    type: CLOSE_PROFILE_POPOVER,
  };
};

export const openMessagePopover = () => {
  return {
    type: OPEN_MESSAGE_POPOVER,
  };
};

export const closeMessagePopover = () => {
  return {
    type: CLOSE_MESSAGE_POPOVER,
  };
};
