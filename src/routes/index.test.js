import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { App } from './';
import initialUserState from '../redux/stores/user';
import history from './history';
const mockStore = configureStore([]);
const store = mockStore(initialUserState);

describe('App component', () => {
  test('App should render', () => {
    const { container } = render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
    expect(container).not.toBe(null);
  });
});
