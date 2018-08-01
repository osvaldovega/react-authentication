import { encode } from '../utils/cryptor';

// this is a simulation for a http request
// this should replace for a real http request using axios and promises
export default function isUserValid(value) {
  return new Promise((resolve, reject) => {
    if (value === encode('adminadmin')) {
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
      resolve({
        status: 401,
        message: 'Error validating user information, invalid credentials or user doesnt exist.'
      });
    }
  });
} 