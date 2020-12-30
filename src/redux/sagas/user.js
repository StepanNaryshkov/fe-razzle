import { call, put } from 'redux-saga/effects';
import CNST from '../../constants';
import axios from 'axios';
import { isResponseOk } from '../../helpers/api/isResponseOk';
import {
  removeToken,
  setToken,
} from '../../library/cookie-service/cookie-services';


export const signInRequest = ({ email, password }) => {
  return axios
    .post('/user-service/login', {
      email: email,
      password: password,
    })
    .catch(function (error) {
      if (error.response.status !== 504) {
        //backend throws timeout error sometimes
        throw error.response.data;
      }
    });
};

export function* signIn(props) {
  try {
    const response = yield call(signInRequest, props.payload);
    if (isResponseOk(response)) {
      yield put({
        type: CNST.USER.SIGN_IN.SUCCESS,
        payload: { email: props.payload.email, ...response.data },
      });
      setToken(response.data.token, props.payload.remember);
    } else {
      yield put({ type: CNST.USER.SIGN_IN.ERROR, payload: response.data });
    }
  } catch (error) {
    yield put({ type: CNST.USER.SIGN_IN.ERROR, payload: { errors: error } });
  }
}

export function* signOut() {
  removeToken();
  yield put({
    type: CNST.USER.SIGN_OUT.SUCCESS,
  });
}

export const getUserRequest = () => {
  return axios.get('/user-service/me').catch(function (error) {
    throw error.response.data;
  });
};

export function* getUser() {
  try {
    const response = yield call(getUserRequest);
    yield put({ type: CNST.USER.GET_PROFILE.SUCCESS, payload: response.data });
  } catch (error) {
    removeToken();
    yield put({
      type: CNST.USER.GET_PROFILE.ERROR,
    });
  }
}
