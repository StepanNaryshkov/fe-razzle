import get from 'lodash/get';
import {connect} from 'react-redux';
import {getUserAction} from '../../redux/actions/user';
import {AuthLayout} from './component';

export interface IProps {
  isGetUserFetched: boolean;
  isLoggedIn: boolean;
  role: string;
}

export const mapStateToProps = (state: {
  user: IProps
}) => ({
  isGetUserFetched: get(state, 'user.isGetUserFetched', false),
  isLoggedIn: get(state, 'user.isLoggedIn', false),
  role: get(state, 'user.role', ''),
});

export const mapDispatchToProps = (dispatch: (arg: any) => void) => ({
  getUser: () => dispatch(getUserAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthLayout);
