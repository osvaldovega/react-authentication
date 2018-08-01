import * as types from '../utils/constants';
import initialState from '../utils/initialState';

export default function loginReducer(state = initialState.login, action) {
  switch (action.type) {
    case types.LOGIN_FORM_VALIDATING_USER:
      return {
        ...state,
        isLoading: true
      };

    case types.LOGIN_FORM_VALIDATING_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        error: {},
        user: action.payload.data.user
      };

    case types.LOGIN_FORM_VALIDATING_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        snackBarStatus: true,
        error: action.payload
      };

    case types.SNACKBAR_ONCHANGE:
      return {
        ...state,
        snackBarStatus: action.payload
      };

    case types.USER_LOGOUT:
      return {
        ...state,
        user: {},
        isAuth: false,
      };

    default:
      return state;
  }
}