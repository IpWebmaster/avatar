import React from 'react';
import { Route } from 'react-router';
import { requireAuthentication } from './containers/AuthenticatedComponent';

import App from './containers/App';
import LoginPage from './containers/LoginPage';
import NotFound from './components/NotFound/NotFound';

export const routes = (
  <div>
    <Route path="/" component={requireAuthentication(App)} />
    <Route path="login" component={LoginPage} />
    <Route path="*" component={NotFound} />
  </div>
);
