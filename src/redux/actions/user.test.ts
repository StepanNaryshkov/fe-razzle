import {getUserAction, signInAction} from './user';
import CNST from '../../constants';

describe('User actions', () => {
  test('signInAction should return correct value', () => {
    const payload = {
      email: 'Test',
      password: 'test',
    };
    expect(signInAction(payload)).toEqual({
      type: CNST.USER.SIGN_IN.FETCH,
      payload,
    });
  });

  test('getUserAction should return correct value', () => {
    expect(getUserAction()).toEqual({
      type: CNST.USER.GET_PROFILE.FETCH,
    });
  });
});
