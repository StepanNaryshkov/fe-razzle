import {mapStateToProps, mapDispatchToProps} from ".";

describe("SignIn index", () => {
  test("should correct map state to props", () => {
    const state = {
      user: {
        fetching: true,
        errors: false,
      },
    };
    expect(mapStateToProps(state)).toMatchObject(state.user);
  });

  test("dispatch should be called", () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).signIn();
    expect(dispatch).toHaveBeenCalledTimes(1);
  });
});
