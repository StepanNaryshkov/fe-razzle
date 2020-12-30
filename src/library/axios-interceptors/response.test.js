import './response';

import axios from 'axios';
import * as services from '../cookie-service/cookie-services';

describe('Response interceptor', () => {
  test('should return response', () => {
    const response = {status: 200};
    const res = axios.interceptors.response.handlers[0].fulfilled(response);
    expect(res).toMatchObject(response);
  });

  test('should remove token if status is 401', () => {
    // eslint-disable-next-line
    services.removeToken = jest.fn();
    const error = {
      response: {
        status: 401,
        config: {
          url: '/user-service/me',
        },
      },
    };
    axios.interceptors.response.handlers[0].rejected(error);
    expect(services.removeToken).toBeCalled();
  });

  test('should throw an error if 400', () => {
    const error = {
      response: {
        status: 400,
        config: {
          url: '/test',
        },
      },
    };
    let thrownError;
    try {
      axios.interceptors.response.handlers[0].rejected(error);
    } catch (err) {
      thrownError = err;
    }
    expect(thrownError).toMatchObject(error);
  });

  test('should throw an error if 500', () => {
    const error = {
      response: {
        status: 500,
        config: {
          url: '/test',
        },
      },
    };
    let thrownError;
    try {
      axios.interceptors.response.handlers[0].rejected(error);
    } catch (err) {
      thrownError = err;
    }
    expect(thrownError).toMatchObject(error);
  });

  test('should throw error if network error', () => {
    const error = {
      message: 'Network error',
    };
    let thrownError;
    try {
      axios.interceptors.response.handlers[0].rejected(error);
    } catch (err) {
      thrownError = err;
    }
    expect(thrownError).toBe(error.message);
  });
});
