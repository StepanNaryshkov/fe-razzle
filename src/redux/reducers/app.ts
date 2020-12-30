import CNST from '../../constants';
import app from '../stores/app';

export interface AppState {
  notification: {
    isOpened: boolean
  }
}

export interface AppAction {
  type: string;
  payload?: {};
}

export default function(state : AppState = app, action: AppAction) {
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
