import CNST from "../../constants";
import userReducer from "./user";

describe("User reducer", () => {
  let inititalState;

  beforeEach(() => {
    inititalState = {
      fetching: false,
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should be fetched", () => {
    const signIn = userReducer(inititalState, {
      type: CNST.USER.SIGN_IN.FETCH,
    });
    const signOut = userReducer(inititalState, {
      type: CNST.USER.SIGN_OUT.FETCH,
    });

    expect(signIn).toEqual({
      ...inititalState,
      fetching: true,
    });
    expect(signOut).toEqual({
      ...inititalState,
      fetching: true,
    });
  });

  test("should handle success", () => {
    const payload = {
      email: "test",
    };
    const newState = userReducer(inititalState, {
      type: CNST.USER.SIGN_IN.SUCCESS,
      payload,
    });
    expect(newState).toEqual({
      ...inititalState,
      name: payload.email,
      isLoggedIn: true,
      fetching: false,
    });
  });

  test("should not be fetched", () => {
    const newState = userReducer(inititalState, {
      type: CNST.USER.SIGN_IN.ERROR,
    });
    expect(newState).toEqual({
      ...inititalState,
      fetching: false,
    });
  });

  test("should handle sign out success", () => {
    const newState = userReducer(inititalState, {
      type: CNST.USER.SIGN_OUT.SUCCESS,
    });
    expect(newState).toEqual({
      ...inititalState,
      email: "",
      role: "",
      isGetUserFetched: false,
      isLoggedIn: false,
      fetching: false,
    });
  });

  test("get user error appear correctly", () => {
    const newState = userReducer(inititalState, {
      type: CNST.USER.GET_PROFILE.ERROR,
    });
    expect(newState).toEqual({
      ...inititalState,
      fetching: false,
      isGetUserFetched: false,
      isLoggedIn: false,
    });
  });

  test("clearErrors should clear errors", () => {
    const payload = {
      errors: "test",
    };

    const newState = userReducer(
      {},
      {
        type: CNST.USER.CLEAR_ERRORS.SUCCESS,
        payload,
      }
    );
    expect(newState).toEqual({
      errors: payload,
    });
  });

  test("get user should be fetched", () => {
    const newState = userReducer(inititalState, {
      type: CNST.USER.GET_PROFILE.FETCH,
    });

    expect(newState).toEqual({
      ...inititalState,
      fetching: true,
    });
  });

  test("should handle get profile success", () => {
    const payload = {
      email: "test",
    };
    const newState = userReducer(inititalState, {
      type: CNST.USER.GET_PROFILE.SUCCESS,
      payload,
    });
    expect(newState).toEqual({
      ...inititalState,
      ...payload,
      fetching: false,
      isGetUserFetched: true,
    });
  });

  test("should return initial state", () => {
    const newState = userReducer(inititalState, {type: "TEST"});
    expect(newState).toEqual(inititalState);
  });
});
