import React from 'react';
import Routes from './Routes';
import { withRouter } from 'react-router-dom';
import NavMenu from './NavMenu';
import appRoutes from '../utils/appRoutes';

const App = (props) => {
  
  function shouldShowNavMenu() {
    const currentPath = props.location.pathname;
    const isPathValid = appRoutes.map(route => route.path).indexOf(currentPath) > -1;
    return (isPathValid && currentPath !== '/login') && <NavMenu />;
  }

  return (
    <div className='main_container'>
      { shouldShowNavMenu() }
      <Routes />
    </div>
  );
}

export default withRouter(App);
