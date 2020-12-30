import React, { useCallback, useMemo } from 'react';
import Router from './routes';

import { Notification } from './components';
import get from 'lodash/get';
import { toggleNotificationAction } from './redux/actions/app';
import { connect } from 'react-redux';

export const mapStateToProps = (state) => {
  return {
    notification: get(state, 'app.notification', {}),
  };
};

export const mapDispatchToProps = (dispatch) => ({
  toggleNotification: (props) => dispatch(toggleNotificationAction(props)),
});

export const App = ({ notification, toggleNotification, }) => {
  const handleToggleNotification = useCallback(() => {
    toggleNotification({ isOpened: false });
  }, [toggleNotification]);

  const isOpenNotification = useMemo(() => {
    return notification.isOpened && notification.type;
  }, [notification.isOpened, notification.type]);

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
