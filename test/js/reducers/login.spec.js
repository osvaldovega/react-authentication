import * as types from '../../../src/js/utils/constants';
import loginReducer from '../../../src/js/reducers/login';
import initialState from '../../../src/js/utils/initialState';

describe('LOGIN Reducer', () => {

  let state;

  beforeEach(() => {
    state = initialState;
  });

  it(`Should return new state when action.type = ${types.LOGIN_FORM_VALIDATING_USER}`, () => {
    const action = {
      type: types.LOGIN_FORM_VALIDATING_USER,
      payload: {
        username: 'user1',
        password: 'pass'
      }
    };

    const newState = loginReducer(state, action);
    const expectedState = {
      ...state,
      isLoading: true
    };

    expect(newState).to.deep.equal(expectedState);
  });

  it(`Should return new state when action.type = ${types.LOGIN_FORM_VALIDATING_USER_SUCCESS}`, () => {
    const response = {
      status: 200,
      token: '123abc',
      data: {
        user: {
          name: 'Bruce Wayne',
          age: 35,
          phone: 'unknown'
        }
      }
    };

    const action = {
      type: types.LOGIN_FORM_VALIDATING_USER_SUCCESS,
      payload: response
    };

    const newState = loginReducer(state, action);
    const expectedState = {
      ...state,
      isLoading: false,
      isAuth: true,
      error: {},
      user: response.data.user
    };

    expect(newState).to.deep.equal(expectedState);
  });

  it(`Should return new state when action.type = ${types.LOGIN_FORM_VALIDATING_USER_ERROR}`, () => {
    const error = {
      status: 401,
      message: 'Error validating user information, invalid credentials or user doesnt exist.'
    };

    const action = {
      type: types.LOGIN_FORM_VALIDATING_USER_ERROR,
      payload: error
    };

    const newState = loginReducer(state, action);
    const expectedState = {
      ...state,
      isLoading: false,
      snackBarStatus: true,
      error: error
    };

    expect(newState).to.deep.equal(expectedState);
  });

  it(`Should return new state when action.type = ${types.SNACKBAR_ONCHANGE}, TRUE`, () => {
    const action = {
      type: types.SNACKBAR_ONCHANGE,
      payload: true
    };

    const newState = loginReducer(state, action);

    const expectedState = {
      ...state,
      snackBarStatus: true
    };

    expect(newState).to.deep.equal(expectedState);
  });

  it(`Should return new state when action.type = ${types.SNACKBAR_ONCHANGE}, FALSE`, () => {
    const action = {
      type: types.SNACKBAR_ONCHANGE,
      payload: false
    };

    const newState = loginReducer(state, action);

    const expectedState = {
      ...state,
      snackBarStatus: false
    };

    expect(newState).to.deep.equal(expectedState);
  });

  it(`Should return new state when action.type = ${types.USER_LOGOUT}`, () => {
    const action = {
      type: types.USER_LOGOUT
    };

    const newState = loginReducer(state, action);

    const expectedState = {
      ...state,
      user: {},
      isAuth: false,
    };

    expect(newState).to.deep.equal(expectedState);
  });

  it('Should return default state when action.type = testing_type', () => {
    const action = {
      type: 'testing_type'
    };

    const newState = loginReducer(state, action);

    expect(newState).to.deep.equal(state);
  });
});