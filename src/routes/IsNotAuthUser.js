import React from 'react';
import { Route } from 'react-router-dom';
import get from 'lodash/get';
import { connect } from 'react-redux';
import CNST from '../constants/';
import AuthLayout from '../layouts/auth';
const { ROLES } = CNST;

const IsNotAuthUser = ({ component: Component, isLoggedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !isLoggedIn ? (
          <Component {...props} />
        ) : (
          <AuthLayout
            permissions={[
              ROLES.ADMIN,
              ROLES.MANAGER,
              ROLES.OPERATOR,
            ]}
          />
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

export default connect(mapStateToProps)(IsNotAuthUser);
