import React from 'react';
import PropTypes from 'prop-types';
import { TextField, Button } from '@material-ui/core';

const LoginForm = ({ username, password, onInputChange, onSubmit, isButtonDisabled }) => (
  <form className={ 'form' }>
    <h2>React Login Auth</h2>
    <TextField
      id='username'
      label='Username'
      fullWidth
      value={username}
      margin='normal'
      required
      autoFocus
      onChange={onInputChange}
    />

    <TextField
      className={'form_input'}
      id='password'
      label='Password'
      type='password'
      fullWidth
      value={password}
      margin='normal'
      required
      onChange={onInputChange}
    />

    <Button
      variant='outlined'
      color='primary'
      className={'login_button'}
      disabled={isButtonDisabled}
      onClick={(e) => onSubmit(e)}
    >
      Login
    </Button>
  </form>
);

LoginForm.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  isButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
