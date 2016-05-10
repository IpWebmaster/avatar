import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { requireAuthentication } from './containers/AuthenticatedComponent';

import App from './containers/App';
import LoginPage from './containers/LoginPage';
import Home from './containers/Home';
import Chat from './containers/Chat';
import NotFound from './components/NotFound/NotFound';

export const routes = (
  <div>
    <Route path="/" component={requireAuthentication(App)}>
      <IndexRoute component={Home} />
      <Route path="/chat" component={Chat} />
    </Route>
    <Route path="login" component={LoginPage} />
    <Route path="*" component={NotFound} />
  </div>
);
