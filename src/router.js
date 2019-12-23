import React from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import Login from './components/login/Login';
import Home from './components/home/Home';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={() => (isAuthenticated
      ? <Component {...rest} />
      : <Redirect to="/login" />)}
  />
);

// eslint-disable-next-line react/prop-types
function Router({ isAuthenticated }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={Login} />
        <PrivateRoute path="/" exact component={Home} isAuthenticated={isAuthenticated} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
