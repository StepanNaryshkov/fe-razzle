import get from 'lodash/get';
import CNST from '../../constants';
import user from '../stores/user';

export interface UserState {
  fetching: boolean;
  role: string;
  email: string;
  isLoggedIn: boolean;
  isGetUserFetched: boolean;
}

export interface UserAction {
  type: string;
  payload?: {
    email?: string;
    errors?: string;
  };
}

export default function(state : UserState = user, action: UserAction) {
  switch (action.type) {
    case CNST.USER.SIGN_OUT.FETCH:
    case CNST.USER.SIGN_IN.FETCH:
      return {
        ...state,
        fetching: true,
      };
    case CNST.USER.SIGN_IN.SUCCESS:
      return {
        ...state,
        email: get(action, 'payload.email', ''),
        isLoggedIn: true,
      };
    case CNST.USER.SIGN_IN.ERROR:
      return {
        ...state,
        ...action.payload,
        fetching: false,
      };
    case CNST.USER.SIGN_OUT.SUCCESS:
      return {
        ...user,
        isLoggedIn: false,
      };
    case CNST.USER.CLEAR_ERRORS.SUCCESS:
      return {
        ...state,
        errors: action.payload,
      };
    case CNST.USER.GET_PROFILE.FETCH:
      return {
        ...state,
        fetching: true,
      };
    case CNST.USER.GET_PROFILE.SUCCESS:
      return {
        ...state,
        ...action.payload,
        fetching: false,
        isGetUserFetched: true,
      };
    case CNST.USER.GET_PROFILE.ERROR:
      return {
        ...state,
        fetching: false,
        isGetUserFetched: false,
        isLoggedIn: false,
      };
    default:
      return state;
  }
}
