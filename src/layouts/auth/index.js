import get from 'lodash/get';
import { getUserAction } from '../../redux/actions/user';
import { connect } from 'react-redux';
import { AuthLayout } from './component';

export const mapStateToProps = (state) => {
  return {
    isGetUserFetched: get(state, 'user.isGetUserFetched', false),
    isLoggedIn: get(state, 'user.isLoggedIn', false),
    role: get(state, 'user.role', ''),
  };
};

export const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(getUserAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthLayout);
