import CNST from "../../constants";

export function signInAction(data) {
  return {
    type: CNST.USER.SIGN_IN.FETCH,
    payload: data,
  };
}

export function signOutAction() {
  return {
    type: CNST.USER.SIGN_OUT.FETCH,
  };
}

export function clearErrorsAction(data) {
  return {
    type: CNST.USER.CLEAR_ERRORS.SUCCESS,
    payload: data,
  };
}

export function getUserAction() {
  return {
    type: CNST.USER.GET_PROFILE.FETCH,
  };
}
