import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import get from 'lodash/get';
import CNST from '../constants/app';

const {ROUTE} = CNST;

export interface IIsAuthUser {
  component: React.ComponentType<any>;
  isLoggedIn: boolean;
  permissions: string[];
  exact?: boolean;
  path?: string;
}

export interface IState {
  isLoggedIn: boolean;
}

const IsAuthUser = ({
  component: Component,
  isLoggedIn,
  permissions, // @TODO needs to check permissions
  ...rest
}: IIsAuthUser) => (
  <Route
    {...rest}
    render={(props) =>
      isLoggedIn ? <Component {...props} /> : <Redirect to={ROUTE.SIGN_IN} />
    }
  />
);

export const mapStateToProps = (state: {
  user: IState
}) => ({
  isLoggedIn: get(state, 'user.isLoggedIn', false),
});

export default connect(mapStateToProps)(IsAuthUser);
