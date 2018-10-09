import api from '../../../src/js/services';
import { encode } from '../../../src/js/utils/cryptor';

describe('SERVICES', () => {

  it('Validate USER for login with correct username and password', () => {
    const value = 'adminadmin';

    const expectedResponse = {
      status: 200,
      token: encode('BruceWayneTokenString'),
      data: {
        user: {
          name: 'Bruce Wayne',
          age: 35,
          phone: 'unknown'
        }
      }
    };

    const actualPromise = api.isUserValid(value);

    actualPromise.then(response => {
      expect(response).to.equal(expectedResponse);
    });

  });

  it('Validate USER for login with incorrect username and password', () => {
    const value = 'testtest';

    const expectedResponse = {
      status: 401,
      message: 'Error validating user information, invalid credentials or user doesnt exist.'
    };

    const actualPromise = api.isUserValid(value);

    actualPromise.catch(err => {
      expect(err).to.equal(expectedResponse);
    });

  });

});