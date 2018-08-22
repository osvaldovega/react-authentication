import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { NAV_MENU_OPTIONS } from '../../utils/navMenu';

export default class NavMenu extends Component {
  constructor(props) {
    super(props);
  }

  logout = () => {
    const { onUserLogout, history } = this.props;
    
    onUserLogout();
    history.push('/login');
  }

  renderMenuOptions = () => {
    return NAV_MENU_OPTIONS.map((option, index) => (
      <NavLink key={index} to={option.path} activeClassName={option.selectedClass}>
        {option.icon}
        {option.value}
      </NavLink>
    ));
  }

  renderLogoutButton = () => {
    return (
      <Button
        color='inherit'
        variant='outlined'
        size='small'
        onClick={this.logout}
      >
        Logout
      </Button>
    );
  }
  
  render() {
    return (
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='title' color='inherit' className={ 'menu_opts' }>
            { this.renderMenuOptions() }
          </Typography>
            { this.renderLogoutButton() }
        </Toolbar>
      </AppBar>
    );
  }
}

NavMenu.propTypes = {
  onUserLogout: PropTypes.func.isRequired,
};
