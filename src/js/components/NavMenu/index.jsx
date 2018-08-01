import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { onUserLogout } from '../../actions';
import { NAV_MENU_OPTIONS } from '../../utils/navMenu';

class NavMenu extends Component {
  constructor(props) {
    super(props);
  }

  logout = () => {
    this.props.onUserLogout();
  }

  renderMenuOptions = () => {
    return NAV_MENU_OPTIONS.map((option, index) => (
      <NavLink key={index} to={option.path} activeClassName={option.selectedClass}>
        {option.icon}
        {option.value}
      </NavLink>
    ));
  }
  
  render() {
    const { isAuth } = this.props;

    if (!isAuth) {
      return <Redirect to='/login' />
    }

    return (
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='title' color='inherit' className={ 'menu_opts' }>
            { this.renderMenuOptions() }
          </Typography>
          <Button
            color='inherit'
            variant='outlined'
            size='small'
            onClick={this.logout}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

NavMenu.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  onUserLogout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.login.isAuth,
  }
}

const mapDispatchToProps = {
  onUserLogout,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavMenu));
