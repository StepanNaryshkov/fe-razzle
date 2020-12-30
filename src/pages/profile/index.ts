import get from 'lodash/get';
import {connect} from 'react-redux';
import {Profile} from './component';

export const mapStateToProps = (state) => ({
  email: get(state, 'user.email', false),
  role: get(state, 'user.role', false),
});

export default connect(mapStateToProps)(Profile);
