import React, {useCallback, useMemo} from "react";
import get from "lodash/get";
import {connect} from "react-redux";
import Router from "./routes";
import {Notification} from "./components";
import {toggleNotificationAction} from "./redux/actions/app";

export const mapStateToProps = (state: {notification: {}}) => ({
  notification: get(state, "app.notification", {}),
});

export const mapDispatchToProps = (dispatch: any) => ({
  toggleNotification: (props: any) => dispatch(toggleNotificationAction(props)),
});

export const App = ({notification, toggleNotification}) => {
  const handleToggleNotification = useCallback(() => {
    toggleNotification({isOpened: false});
  }, [toggleNotification]);

  const isOpenNotification = useMemo(() => notification.isOpened && notification.type, [
    notification.isOpened,
    notification.type,
  ]);

  return (
    <>
      {isOpenNotification && (
        <Notification
          onClose={handleToggleNotification}
          isOpened={notification.isOpened}
          message={notification.message}
          type={notification.type}
        />
      )}
      <Router />
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
