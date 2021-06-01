import { combineReducers } from 'redux';
import loginModalReducer from './loginModalReducer';
import popoverReducer from './popoverReducer';
import chatBoxReducer from './chatBoxReducer';
import messageModalReducer from './messageModalReducer';

export default combineReducers({
  loginModal: loginModalReducer,
  popover: popoverReducer,
  chatBox: chatBoxReducer,
  messageModal: messageModalReducer,
});
