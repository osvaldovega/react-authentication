import React from 'react';
import PropTypes from 'prop-types';
import { TextField, Button } from '@material-ui/core';

const LoginForm = ({ username, password, onInputChange, onSubmit, isButtonDisabled }) => {
  const btnClass = isButtonDisabled ? 'login_button' : 'login_button isEnabled';

  return (
    <form className={ 'form' }>
      <h2>Login Auth</h2>
      <TextField
        id='username'
        label='Username'
        fullWidth
        value={username}
        margin='normal'
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
        fullWidth
        className={btnClass}
        disabled={isButtonDisabled}
        onClick={(e) => onSubmit(e)}
      >
        Login
      </Button>
    </form>
  );
}

LoginForm.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  isButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
