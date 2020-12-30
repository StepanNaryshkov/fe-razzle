import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import get from 'lodash/get';
import CNST from '../constants/app';

const { ROUTE } = CNST;

const IsAuthUser = ({
  component: Component,
  isLoggedIn,
  permissions, // @TODO needs to check permissions
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={ROUTE.SIGN_IN} />
        )
      }
    />
  );
};

export const mapStateToProps = (state) => {
  return {
    isLoggedIn: get(state, 'user.isLoggedIn', false),
  };
};

export default connect(mapStateToProps)(IsAuthUser);
