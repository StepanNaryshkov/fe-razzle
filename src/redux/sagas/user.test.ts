import axios from 'axios';
import {testSaga} from 'redux-saga-test-plan';
import CNST from '../../constants';
import {getUser, getUserRequest, signIn, signInRequest, signOut} from './user';
import * as services from '../../library/cookie-service/cookie-services';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

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
    mockedAxios.post = jest.fn();
    mockedAxios.get = jest.fn();
  });

  afterEach(() => {
    mockedAxios.post.mockRestore();
    mockedAxios.get.mockRestore();
  });

  test('signIn test success, with setToken called', () => {
    const spy = jest.spyOn(services, 'setToken');
    const newProps = {
      payload: {
        email: 'test@gmail.com',
        password: 'password123',
        remember: true,
      },
      type: '',
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
    expect(spy).toBeCalled();
  });

  test('sigInRequest test success', async () => {
    mockedAxios.post.mockImplementationOnce(() => Promise.resolve(singInData));
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
    mockedAxios.post.mockImplementation(() => Promise.reject(error));
    await expect(signInRequest(singInData)).rejects.toEqual(error.response.data);
  });

  test('signIn test success', () => {
    const newProps = {
      payload: singInData,
      type: '',
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

  test('signIn response not ok', () => {
    const newProps = {
      payload: singInData,
      type: '',
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

  test('getUser test success', () => {
    testSaga(getUser)
        .next()
        .call(getUserRequest)
        .next(response)
        .put({type: CNST.USER.GET_PROFILE.SUCCESS, payload: response.data});
  });

  test('getUser test error', () => {
    testSaga(getUser).next().call(getUserRequest).next(response).throw(new Error()).put({
      type: CNST.USER.GET_PROFILE.ERROR,
    });
  });

  test('getUserRequest test success', async () => {
    mockedAxios.get.mockImplementationOnce(() => Promise.resolve());
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
    mockedAxios.get.mockImplementation(() => Promise.reject(error));
    await expect(getUserRequest()).rejects.toEqual(error.response.data);
  });

  test('signOut test success', () => {
    const spy = jest.spyOn(services, 'removeToken');
    testSaga(signOut).next().put({
      type: CNST.USER.SIGN_OUT.SUCCESS,
    });
    expect(spy).toBeCalled();
  });
});
