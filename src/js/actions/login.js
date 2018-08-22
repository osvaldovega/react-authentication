import * as types from '../utils/constants';
import LocalStorage from '../utils/localStorage';

function logout() {
  return {
    type: types.USER_LOGOUT
  };
}

export function validateUserSuccess(response) {
  return {
    type: types.LOGIN_FORM_VALIDATING_USER_SUCCESS,
    payload: response
  }
}

export function validateUserError(err) {
  return {
    type: types.LOGIN_FORM_VALIDATING_USER_ERROR,
    payload: err
  }
}

export function onSnackBarChange(status) {
  return {
    type: types.SNACKBAR_ONCHANGE,
    payload: status
  }
}

export function validateUser(username, password) {
  return {
    type: types.LOGIN_FORM_VALIDATING_USER,
    payload: {
      username,
      password,
    }
  }
}

export function onUserLogout() {
  return dispatch => {
    LocalStorage.remove('token');
    dispatch(logout());
  }
}
