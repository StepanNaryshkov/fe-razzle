import React from 'react';
import {Route} from 'react-router-dom';
import get from 'lodash/get';
import {connect} from 'react-redux';
import CNST from '../constants';
import AuthLayout from '../layouts/auth';

const {ROLES} = CNST;

export interface IIsNotAuthUser {
  component: React.ComponentType<any>;
  isLoggedIn: boolean;
  exact?: boolean;
  path?: string;
}

export interface IState {
  isLoggedIn: boolean;
}

const IsNotAuthUser = ({component: Component, isLoggedIn, ...rest}: IIsNotAuthUser) => (
  <Route
    {...rest}
    render={(props) =>
      !isLoggedIn ? (
        <Component {...props} />
      ) : (
        <AuthLayout permissions={[ROLES.ADMIN, ROLES.MANAGER, ROLES.OPERATOR]} />
      )
    }
  />
);

export const mapStateToProps = (state: {
  user: IState
}) => ({
  isLoggedIn: get(state, 'user.isLoggedIn', false),
});

export default connect(mapStateToProps)(IsNotAuthUser);
