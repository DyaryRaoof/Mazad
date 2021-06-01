import reactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import './index.css';
import './fonts/Ubuntu/Ubuntu-Bold.ttf';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);

reactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
