import { SignIn } from "./component";
import get from "lodash/get";
import { clearErrorsAction, signInAction } from "../../redux/actions/user";
import { connect } from "react-redux";

export const mapStateToProps = (state) => {
  return {
    fetching: get(state, "user.fetching", false),
    errors: get(state, "user.errors", {}),
  };
};

export const mapDispatchToProps = (dispatch) => ({
  signIn: (props) => dispatch(signInAction(props)),
  clearErrors: (props) => dispatch(clearErrorsAction(props)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
