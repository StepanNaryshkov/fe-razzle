import {toggleNotificationAction} from "./app";
import CNST from "../../constants";

describe("App actions", () => {
  test("toggleNotificationAction should return true", () => {
    expect(toggleNotificationAction({isOpened: true})).toEqual({
      type: CNST.APP.TOGGLE_NOTIFICATION.SUCCESS,
      payload: {
        notification: {
          isOpened: true,
        },
      },
    });
  });
  test("toggleNotificationAction should return false", () => {
    expect(toggleNotificationAction({isOpened: false})).toEqual({
      type: CNST.APP.TOGGLE_NOTIFICATION.SUCCESS,
      payload: {
        notification: {
          isOpened: false,
        },
      },
    });
  });
});
