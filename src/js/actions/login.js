import * as types from '../utils/constants';
import isUserValid from '../services';
import { encode } from '../utils/cryptor';
import LocalStorage from '../utils/localStorage';

export function onSnackBarChange(status) {
  return {
    type: types.SNACKBAR_ONCHANGE,
    payload: status
  }
}

function logout() {
  return {
    type: types.USER_LOGOUT
  };
}

function validateUserSuccess(response) {
  return {
    type: types.LOGIN_FORM_VALIDATING_USER_SUCCESS,
    payload: response
  }
}

function validateUserError(err) {
  return {
    type: types.LOGIN_FORM_VALIDATING_USER_ERROR,
    payload: err
  }
}

function validatingUser() {
  return {
    type: types.LOGIN_FORM_VALIDATING_USER
  }
}

export function validateUser(username, password) {  
  return dispatch => {
    dispatch(validatingUser())
    isUserValid(encode(username + password))
      .then(response => {
        if (response.status === 200) {
          LocalStorage.set('token', response.token);
          setTimeout(() => dispatch(validateUserSuccess(response)), 4000);
          ;
        } else {
          setTimeout(() => dispatch(validateUserError(response)), 4000);
        }
      });
    }
}

export function onUserLogout() {
  return dispatch => {
    LocalStorage.remove('token');
    dispatch(logout());
  }
}
