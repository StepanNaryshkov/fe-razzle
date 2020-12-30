import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { Router } from 'react-router-dom';
import history from '../../routes/history';
import { AuthLayout } from './component';
import React from 'react';
import CNST from '../../constants';
import Profile from '../../pages/profile';

const buildComponent = (props) =>
  render(
    <Provider store={store}>
      <Router history={history}>
        <AuthLayout {...props}>
          <Profile />
        </AuthLayout>
      </Router>
    </Provider>
  );

describe('Auth layout component', () => {
  let props;

  beforeEach(() => {
    props = {
      getUser: jest.fn(),
      isGetUserFetched: true,
      isLoggedIn: true,
      role: CNST.ROLES.ADMIN,
      permissions: [CNST.ROLES.ADMIN],
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should render', () => {
    const { getByTestId } = buildComponent(props);
    expect(getByTestId('profile')).toBeTruthy();
  });

  test("should render not found, when user doesn't have permission", () => {
    const newProps = {
      ...props,
      permissions: [CNST.ROLES.OPERATOR],
    };
    const { getByTestId } = buildComponent(newProps);
    expect(getByTestId('not-found')).toBeTruthy();
  });

  test('should call getUser', () => {
    const newProps = {
      ...props,
      isGetUserFetched: false,
      isLoggedIn: true,
    };
    buildComponent(newProps);
    expect(newProps.getUser).toBeCalled();
  });

  test('should render spinner while data is fetching', () => {
    const newProps = {
      ...props,
      isGetUserFetched: false,
      isLoggedIn: true,
    };
    const { getByTestId } = buildComponent(newProps);
    expect(getByTestId('loader')).toBeTruthy();
  });
});
