import initilState from '../../../src/js/utils/initialState';

describe('UTILS - INITIAL STATE', () => {
  it('Testing Reudx Initial State', () => {

    const expectedState = {
      login: {
        user: {},
        error: {},
        isAuth: false,
        isLoading: false,
        snackBarStatus: false
      }
    };

    expect(initilState).to.deep.equal(expectedState);
  });
});