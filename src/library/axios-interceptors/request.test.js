import "./request";
import axios from "axios";
import * as services from "../cookie-service/cookie-services";

describe("Request interceptor", () => {
  test("should set the header when token exists", () => {
    services.getToken = jest.fn(() => "token");
    let config = {
      headers: {
        Authorization: undefined,
      },
      other: "test",
    };
    let res = axios.interceptors.request.handlers[0].fulfilled(config);
    expect(res.headers["Authorization"]).toBe("Bearer token");
  });

  test("should not set the header when token doesnt exists", () => {
    services.getToken = jest.fn(() => "");
    let config = {
      headers: {
        Authorization: undefined,
      },
      other: "test",
    };
    let res = axios.interceptors.request.handlers[0].fulfilled(config);
    expect(res.headers["Authorization"]).toBe(undefined);
  });

  test("should throw an error", () => {
    let error = {
      status: 400,
    };
    let res = axios.interceptors.request.handlers[0].rejected(error);
    expect(res).toMatchObject(error);
  });
});