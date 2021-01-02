import CNST from '../../constants';

export interface ISignInAction {
  email: string;
  password: string;
}

export function signInAction(data: ISignInAction) {
  return {
    type: CNST.USER.SIGN_IN.FETCH,
    payload: data,
  };
}

export function getUserAction() {
  return {
    type: CNST.USER.GET_PROFILE.FETCH,
  };
}
