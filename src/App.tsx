import React, {useCallback, useMemo} from 'react';
import get from 'lodash/get';
import {connect} from 'react-redux';
import Router from './routes';
import {Notification} from './components';
import {toggleNotificationAction} from './redux/actions/app';
import {IAppState, TNotification} from './redux/reducers/app';

interface IApp {
  notification: TNotification;
  toggleNotification: (props: TNotification) => void;
}

export const mapStateToProps = (state: {
  app: IAppState
}) => ({
  notification: get(state, 'app.notification', {}),
});

export const mapDispatchToProps = (dispatch: any) => ({
  toggleNotification: (props: any) => dispatch(toggleNotificationAction(props)),
});

export const App = ({notification, toggleNotification}: IApp) => {
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
