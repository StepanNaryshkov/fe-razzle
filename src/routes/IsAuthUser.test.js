import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { render } from '@testing-library/react';

import history from './history';
import initialUserState from '../redux/stores/user';
import IsAuthUser, { mapStateToProps } from './IsAuthUser';
import NotFound from '../pages/not-found';

const mockStore = configureStore([]);
const store = mockStore(initialUserState);

describe('IsAuthUser', () => {
  let props = {
    component: NotFound,
    isLoggedIn: true,
    rest: {},
  };

  const { container } = render(
    <Provider store={store}>
      <Router history={history}>
        <IsAuthUser {...props} />
      </Router>
    </Provider>
  );

  test('should render', () => {
    expect(container).toBeTruthy();
  });

  test('should map state to props', () => {
    const state = {
      user: {
        isLoggedIn: true,
      },
    };
    expect(mapStateToProps(state)).toMatchObject(state.user);
  });
});
