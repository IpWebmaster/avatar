import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { Router, browserHistory } from 'react-router';
import { routes } from './routes';
import { loginUserSuccess } from './actions/UserActions';
import injectTapEventPlugin from 'react-tap-event-plugin';
import 'normalize.css/normalize.css';

const store = configureStore();

injectTapEventPlugin();

const token = localStorage.getItem('token');
if (token !== null) {
  store.dispatch(loginUserSuccess(token));
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
);
