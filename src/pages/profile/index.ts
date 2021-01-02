import get from 'lodash/get';
import {connect} from 'react-redux';
import {Profile} from './component';

export interface IProps {
  email: string;
  role: string;
}
export const mapStateToProps = (state: {
  user: IProps
}) => ({
  email: get(state, 'user.email', false),
  role: get(state, 'user.role', false),
});

export default connect(mapStateToProps)(Profile);
