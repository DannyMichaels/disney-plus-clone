import { Route, Switch } from 'react-router-dom';

import Login from '../pages/auth/Login';
import Home from '../pages/Home';

export const AppRouter = () => (
  <Switch>
    <Route exact path="/" component={Login} />
  </Switch>
);
