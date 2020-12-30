import get from "lodash/get";
import {connect} from "react-redux";
import {Notification} from "./component";
import {toggleNotificationAction} from "../../redux/actions/app";

export const mapStateToProps = (state) => ({
  notification: get(state, "app.notification", {}),
});

export const mapDispatchToProps = (dispatch) => ({
  toggleNotification: (props) => dispatch(toggleNotificationAction(props)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
