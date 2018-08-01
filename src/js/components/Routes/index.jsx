import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Login from '../Login';
import Home from '../Home';
import About from '../About';
import NoMatch from '../NoMatch';

const Routes = (props) => (
  <Switch>
    <Route path='/login' component={Login} />
    <PrivateRoute path='/home' component={Home} />
    <PrivateRoute path='/about' component={About} />
    <PublicRoute exact path='/' />
    <Route component={NoMatch} />
  </Switch>
);

export default Routes;
