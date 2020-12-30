import './request';
import axios from 'axios';
import * as services from '../cookie-service/cookie-services';

describe('Request interceptor', () => {
  test('should set the header when token exists', () => {
    // eslint-disable-next-line
    services.getToken = jest.fn(() => 'token');
    const config = {
      headers: {
        Authorization: undefined,
      },
      other: 'test',
    };
    const res = axios.interceptors.request.handlers[0].fulfilled(config);
    expect(res.headers.Authorization).toBe('Bearer token');
  });

  test('should not set the header when token doesnt exists', () => {
    // eslint-disable-next-line
    services.getToken = jest.fn(() => '');
    const config = {
      headers: {
        Authorization: undefined,
      },
      other: 'test',
    };
    const res = axios.interceptors.request.handlers[0].fulfilled(config);
    expect(res.headers.Authorization).toBe(undefined);
  });

  test('should throw an error', () => {
    const error = {
      status: 400,
    };
    const res = axios.interceptors.request.handlers[0].rejected(error);
    expect(res).toMatchObject(error);
  });
});
