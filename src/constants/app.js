import roles from "./roles";

export default {
  TOGGLE_NOTIFICATION: {
    SUCCESS: "TOGGLE_NOTIFICATION_SUCCESS",
    ERROR: "TOGGLE_NOTIFICATION_ERROR",
  },
  ROUTE: {
    PROFILE: "/profile",
    SIGN_IN: "/",
    ROLE_BASE: {
      [roles.ADMIN]: "/profile",
      [roles.OPERATOR]: "/profile",
      [roles.MANAGER]: "/profile",
    },
  },
};
