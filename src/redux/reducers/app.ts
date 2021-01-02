import CNST from '../../constants';
import app from '../stores/app';

export type TNotification = {
  isOpened: boolean,
  type?: string,
  message?: string,
}

export interface IAppState {
  notification: TNotification
}

export interface AppAction {
  type: string;
  payload?: {};
}

export default function(state : IAppState = app, action: AppAction) {
  switch (action.type) {
    case CNST.APP.TOGGLE_NOTIFICATION.SUCCESS:
    case CNST.APP.TOGGLE_NOTIFICATION.ERROR:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
