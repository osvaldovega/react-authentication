import { encode } from '../utils/cryptor';

// this is a simulation for a http request
// this should replace for a real http request using axios and promises
const isUserValid = (value) => {
  const credentials = encode(value);

  return new Promise((resolve, reject) =>
    setTimeout(() => {
      if (credentials === encode('adminadmin')) {
        resolve({
          status: 200,
          token: encode('BruceWayneTokenString'),
          data: {
            user: {
              name: 'Bruce Wayne',
              age: 35,
              phone: 'unknown'
            }
          }
        });
      } else {
        reject({
          status: 401,
          message: 'Error validating user information, invalid credentials or user doesnt exist.'
        });
      }
    }, 4000)
  );
};

export default {
  isUserValid,
};
