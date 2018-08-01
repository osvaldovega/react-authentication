import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
  onSnackBarChange,
  validateUser
} from '../../actions';
import LoginForm from './LoginForm';
import SnackBar from '../SnackBar';
import Loader from '../Loader';


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }
  }

  onInputChange = (event) => {
    const { id, value } = event.target;

    if (id === 'username') {
      this.setState({ username: value });
    } else {
      this.setState({ password: value });
    }
  }

  onSnackBarClose = () => {
    this.props.onSnackBarChange(false);
  }

  resetInput = () => {
    this.setState({ username: '', password: '' });
  }

  onLoginFormSubmit = () => {
    const { username, password } = this.state;
    this.props.validateUser(username, password);
    this.resetInput();
  }

  render() {
    const { isLoading, snackBarStatus, error, isAuth } = this.props;
    const { username, password } = this.state;
    const isDisabled = (username === '' || password === '') ? true : false;

    if (isAuth) {
      return <Redirect to='/' />;
    }

    return (
      <Fragment>
        { isLoading && <Loader /> }

        <img src="../../../public/img/back4.png" className={ 'login-bck' } />

        <ReactCSSTransitionGroup
          transitionName="slide"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}
          transitionAppear={true}
          transitionAppearTimeout={1000}
          component='div'
          className='login'
        >
          <LoginForm
            isButtonDisabled={isDisabled}
            onInputChange={this.onInputChange}
            onSubmit={this.onLoginFormSubmit}
            password={password}
            username={username}
          />
        </ReactCSSTransitionGroup>

        <SnackBar
          isOpen={snackBarStatus}
          message={error.message || ''}
          onClose={this.onSnackBarClose}
        />
      </Fragment>
    );
  }
};

Login.propTypes = {
  error: PropTypes.object,
  isAuth: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  snackBarStatus: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    error: state.login.error,
    isAuth: state.login.isAuth,
    isLoading: state.login.isLoading,
    snackBarStatus: state.login.snackBarStatus,
  }
}

const mapDispatchToProps = {
  onSnackBarChange,
  validateUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
