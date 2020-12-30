import get from 'lodash/get';
import {connect} from 'react-redux';
import {SignIn} from './component';
import {clearErrorsAction, signInAction} from '../../redux/actions/user';

export const mapStateToProps = (state) => ({
  fetching: get(state, 'user.fetching', false),
  errors: get(state, 'user.errors', {}),
});

export const mapDispatchToProps = (dispatch) => ({
  signIn: (props) => dispatch(signInAction(props)),
  clearErrors: (props) => dispatch(clearErrorsAction(props)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
