import axios from 'axios';
import {testSaga} from 'redux-saga-test-plan';
import CNST from '../../constants';
import {getUser, getUserRequest, signIn, signInRequest, signOut} from './user';
import * as services from '../../library/cookie-service/cookie-services';

describe('User saga', () => {
  const response = {
    status: 200,
    data: ['Test'],
  };

  const singInData = {
    email: 'test@gmail.com',
    password: 'password123',
  };

  beforeEach(() => {
    axios.post = jest.fn();
    axios.get = jest.fn();
  });

  afterEach(() => {
    axios.post.mockRestore();
    axios.get.mockRestore();
  });

  test('sigInRequest test success', async () => {
    axios.post.mockImplementationOnce(() => Promise.resolve(singInData));
    const postUrl = '/user-service/login';
    await signInRequest(singInData);
    expect(axios.post).toHaveBeenCalledWith(postUrl, singInData);
  });

  test('sigInRequest test error', async () => {
    const error = {
      response: {
        status: 400,
        data: 'Error',
      },
    };
    axios.post.mockImplementation(() => Promise.reject(error));
    await expect(signInRequest(singInData)).rejects.toEqual(error.response.data);
  });

  test('signIn test success', () => {
    const newProps = {
      payload: singInData,
    };
    testSaga(signIn, newProps)
        .next()
        .call(signInRequest, {
          ...newProps.payload,
        })
        .next(response)
        .put({
          type: CNST.USER.SIGN_IN.SUCCESS,
          payload: {email: newProps.payload.email, ...response.data},
        });
  });

  test('signIn test success, with setToken called', () => {
    // eslint-disable-next-line
    services.setToken = jest.fn();
    const newProps = {
      payload: {
        email: 'test@gmail.com',
        password: 'password123',
        remember: true,
      },
    };
    testSaga(signIn, newProps)
        .next()
        .call(signInRequest, {
          ...newProps.payload,
        })
        .next(response)
        .put({
          type: CNST.USER.SIGN_IN.SUCCESS,
          payload: {email: newProps.payload.email, ...response.data},
        })
        .next();
    expect(services.setToken).toBeCalled();
  });

  test('signIn response not ok', () => {
    const newProps = {
      payload: singInData,
    };
    const badResponse = {
      status: 300,
      data: 'error',
    };
    testSaga(signIn, newProps)
        .next()
        .call(signInRequest, {
          ...newProps.payload,
        })
        .next(badResponse)
        .put({type: CNST.USER.SIGN_IN.ERROR, payload: badResponse.data});
  });

  test('signIn test error', () => {
    const newProps = {
      payload: singInData,
    };
    testSaga(signIn, newProps)
        .next()
        .call(signInRequest, {
          ...newProps.payload,
        })
        .next(response)
        .throw('error')
        .put({type: CNST.USER.SIGN_IN.ERROR, payload: {errors: 'error'}});
  });

  test('getUser test success', () => {
    testSaga(getUser)
        .next()
        .call(getUserRequest)
        .next(response)
        .put({type: CNST.USER.GET_PROFILE.SUCCESS, payload: response.data});
  });

  test('getUser test error', () => {
    testSaga(getUser).next().call(getUserRequest).next(response).throw('error').put({
      type: CNST.USER.GET_PROFILE.ERROR,
    });
  });

  test('getUserRequest test success', async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve());
    const postUrl = '/user-service/me';
    await getUserRequest();
    expect(axios.get).toHaveBeenCalledWith(postUrl);
  });

  test('getUserRequest test error', async () => {
    const error = {
      response: {
        status: 400,
        data: 'Error',
      },
    };
    axios.get.mockImplementation(() => Promise.reject(error));
    await expect(getUserRequest()).rejects.toEqual(error.response.data);
  });

  test('signOut test success', () => {
    // eslint-disable-next-line
    services.removeToken = jest.fn();
    testSaga(signOut).next().put({
      type: CNST.USER.SIGN_OUT.SUCCESS,
    });
    expect(services.removeToken).toBeCalled();
  });
});
