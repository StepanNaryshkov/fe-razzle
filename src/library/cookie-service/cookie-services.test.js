import {getToken, removeToken, setToken} from "./cookie-services";

describe("Cookie services", () => {
  test("should set the token to cookies", () => {
    const token = "token";
    setToken(token);
    expect(getToken()).toBe(token);
  });

  test("should remove the token", () => {
    removeToken();
    expect(document.cookie).toBe("");
  });
});
