import axios from 'axios';
import { store } from '../index';
import { toggleMessageModal } from '../actions';

const instance = axios.create({
  baseURL: 'http://localhost:3001/api',
});

instance.interceptors.response.use(
  (res) => res,
  function (error) {
    store.dispatch(toggleMessageModal(error.response.data));
    return Promise.reject(error);
  }
);

export default instance;
