import get from 'lodash/get';
import {connect} from 'react-redux';
import {getUserAction} from '../../redux/actions/user';
import {AuthLayout} from './component';

export const mapStateToProps = (state) => ({
  isGetUserFetched: get(state, 'user.isGetUserFetched', false),
  isLoggedIn: get(state, 'user.isLoggedIn', false),
  role: get(state, 'user.role', ''),
});

export const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(getUserAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthLayout);
