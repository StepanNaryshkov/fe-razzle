import CNST from '../../constants';
import {TNotification} from '../reducers/app';

export function toggleNotificationAction(notification: TNotification) {
  return {
    type: CNST.APP.TOGGLE_NOTIFICATION.SUCCESS,
    payload: {
      notification: {
        ...notification,
      },
    },
  };
}
