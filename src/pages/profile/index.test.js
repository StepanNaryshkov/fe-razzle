import { mapStateToProps } from "./";

describe("Profile index", () => {
  test("should correct map state to props", () => {
    const state = {
      user: {
        email: "test@email.com",
        role: "AUDITOR",
      },
    };
    expect(mapStateToProps(state)).toMatchObject(state.user);
  });
});
