import CNST from '../../constants';
import app from '../stores/app';

export default function(state = app, action) {
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
