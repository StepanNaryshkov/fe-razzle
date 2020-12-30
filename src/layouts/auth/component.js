import React, { useEffect, useState } from 'react';
import {
  PageSpinner,
} from '../../components';
import NotFound from '../../pages/not-found';
import { Redirect } from 'react-router-dom';
import CNST from '../../constants/app';

const { ROUTE } = CNST;

export const AuthLayout = ({
  getUser,
  isGetUserFetched,
  isLoggedIn,
  role,
  permissions,
  children,
}) => {
  const [doesUserHavePermission, setUserPermission] = useState(false);
  const [isNotAllowedToView, setIsNotAllowedToView] = useState(false);

  useEffect(() => {
    if (!isGetUserFetched && isLoggedIn) {
      getUser();
    }
  }, [isGetUserFetched, getUser, isLoggedIn]);

  useEffect(() => {
    if (permissions.includes(role)) {
      setUserPermission(true);
    } else if (role && isGetUserFetched) {
      setIsNotAllowedToView(true);
    }
  }, [
    role,
    permissions,
    isGetUserFetched,
    setUserPermission,
    setIsNotAllowedToView,
  ]);

  const isAllowedToView = doesUserHavePermission && children;
  const needsToBeRedirected = role && doesUserHavePermission && !children;

  return (
    <>
      {!isGetUserFetched && <PageSpinner />}
      {isAllowedToView && (
        <>
          {children}
        </>
      )}
      {needsToBeRedirected && <Redirect to={ROUTE.ROLE_BASE[role]} />}
      {isNotAllowedToView && <NotFound />}
    </>
  );
};
