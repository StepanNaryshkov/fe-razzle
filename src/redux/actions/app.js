import CNST from "../../constants";

export function toggleNotificationAction(notification) {
  return {
    type: CNST.APP.TOGGLE_NOTIFICATION.SUCCESS,
    payload: {
      notification: {
        ...notification,
      },
    },
  };
}
