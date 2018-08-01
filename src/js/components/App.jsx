import React from 'react';
import Routes from './Routes';
import { withRouter } from 'react-router-dom';
import NavMenu from './NavMenu';

const App = ({ location }) => {

  const isLogin = location.pathname === '/login';

  return (
    <div className='main_container'>
      { !isLogin &&  <NavMenu /> }
      <Routes />
    </div>
  );
}

export default withRouter(App);
