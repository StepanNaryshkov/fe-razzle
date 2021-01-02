import get from 'lodash/get';
import {connect} from 'react-redux';
import {SignIn} from './component';
import {signInAction} from '../../redux/actions/user';

export interface IProps {
  fetching: boolean
}

export const mapStateToProps = (state: {
  user: IProps
}) => ({
  fetching: get(state, 'user.fetching', false),
});

export const mapDispatchToProps = (dispatch: (arg: any) => void) => ({
  signIn: (props: any) => dispatch(signInAction(props)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
