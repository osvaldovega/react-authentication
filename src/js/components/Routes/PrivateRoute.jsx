import React from 'react';
import { Route, Redirect } from "react-router-dom";
import LocalStorage from '../../utils/localStorage';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = LocalStorage.get('token') || false;

  return <Route
    {...rest}
    render={props =>
      token
      ? <Component {...props} />
      : <Redirect to={{
          pathname: "/",
          state: { from: props.location }
        }} />
    }
  />
};

export default PrivateRoute;
