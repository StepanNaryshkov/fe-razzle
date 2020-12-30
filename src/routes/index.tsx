import React from 'react';
import {Route, Switch} from 'react-router-dom';
import CNST from '../constants';
import '../style/general.module.scss';
import IsAuthUser from './IsAuthUser';
import IsNotAuthUser from './IsNotAuthUser';
import NotFound from '../pages/not-found';
import SignIn from '../pages/sign-in';
import Profile from '../pages/profile';

const {ROUTE} = CNST.APP;
const {ROLES} = CNST;

export const App = () => (
  <Switch>
    <IsAuthUser
      exact
      path={ROUTE.PROFILE}
      component={Profile}
      permissions={[ROLES.ADMIN, ROLES.MANAGER, ROLES.OPERATOR]}
    />
    <IsNotAuthUser exact path={ROUTE.SIGN_IN} component={SignIn} />
    <Route path="*">
      <NotFound />
    </Route>
  </Switch>
);

export default App;
