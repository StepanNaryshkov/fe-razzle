import {
  clearErrorsAction,
  getUserAction,
  signInAction,
  signUpAction,
} from "./user";
import CNST from "../../constants/";

describe("User actions", () => {
  test("signInAction should return correct value", () => {
    const payload = {
      name: "Test",
      password: "test",
    };
    expect(signInAction(payload)).toEqual({
      type: CNST.USER.SIGN_IN.FETCH,
      payload,
    });
  });
  test("clearErrorsAction should return correct value", () => {
    const payload = {
      name: "Test",
    };
    expect(clearErrorsAction(payload)).toEqual({
      type: CNST.USER.CLEAR_ERRORS.SUCCESS,
      payload,
    });
  });

  test("getUserAction should return correct value", () => {
    expect(getUserAction()).toEqual({
      type: CNST.USER.GET_PROFILE.FETCH,
    });
  });
});
