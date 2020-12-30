import { Notification } from './component';
import get from 'lodash/get';
import { toggleNotificationAction } from '../../redux/actions/app';
import { connect } from 'react-redux';

export const mapStateToProps = (state) => {
  return {
    notification: get(state, 'app.notification', {}),
  };
};

export const mapDispatchToProps = (dispatch) => ({
  toggleNotification: (props) => dispatch(toggleNotificationAction(props)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
