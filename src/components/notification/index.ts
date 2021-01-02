import get from 'lodash/get';
import {connect} from 'react-redux';
import {Notification} from './component';
import {toggleNotificationAction} from '../../redux/actions/app';
import {IAppState, TNotification} from '../../redux/reducers/app';

export const mapStateToProps = (state: IAppState) => ({
  notification: get(state, 'app.notification', {}),
});

export const mapDispatchToProps = (dispatch: (arg: any) => void) => ({
  toggleNotification: (props: TNotification) => dispatch(toggleNotificationAction(props)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
