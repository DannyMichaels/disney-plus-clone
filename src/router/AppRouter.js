import {
  BrowserRouter as RouterProvider,
  Route,
  Switch,
} from 'react-router-dom';

import Login from '../pages/auth/Login';
import Home from '../pages/Home';

export const AppRouter = () => (
  <RouterProvider>
    <Switch>
      <Route exact path="/" component={Login} />
    </Switch>
  </RouterProvider>
);
