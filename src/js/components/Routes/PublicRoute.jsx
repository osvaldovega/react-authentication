import React from 'react';
import {
  Route,
  Redirect,
} from "react-router-dom";
import LocalStorage from '../../utils/localStorage';

const PublicRoute = ({ component: Component, ...rest }) => {
  const token = LocalStorage.get('token');

  return <Route 
    {...rest}
    render={props =>
      token
      ? <Redirect to={{
          pathname: "/home",
          state: { from: props.location }
        }} />
      : <Redirect to={{
          pathname: "/login",
          state: { from: props.location }
        }} />
    }
  />
};

export default PublicRoute;
