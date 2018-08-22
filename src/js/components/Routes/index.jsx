import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import NoMatch from '../NoMatch';
import appRoutes from '../../utils/appRoutes';

const Routes = (props) => {

  function renderRoutes() {
    return appRoutes.map((route, index) => {
      if(route.path === '/login') {
        return <Route key={index} path={route.path} component={route.component} />;
      }

      return <PrivateRoute key={index} path={route.path} component={route.component} />;
    });
  }
  
  return (
    <Switch>
      { renderRoutes() }     
      <PublicRoute exact path='/' />
      <Route path='*' component={NoMatch} />
    </Switch>
  );
}

export default Routes;
