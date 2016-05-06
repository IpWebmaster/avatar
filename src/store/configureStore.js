import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from '../reducers';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { redirect } from '../middlewares/redirect';

export default function configureStore() {
  const store = compose(
    applyMiddleware(thunkMiddleware),
    applyMiddleware(createLogger()),
    applyMiddleware(redirect)
  )(createStore)(rootReducer);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      /* eslint-disable */
      const nextRootReducer = require('../reducers').rootReducer;
      /* eslint-enable */
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
