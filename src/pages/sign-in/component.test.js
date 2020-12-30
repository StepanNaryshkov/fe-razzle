import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { SignIn } from './component';
import { Router } from 'react-router-dom';
import history from '../../routes/history';

const buildComponent = (props) =>
  render(
    <Router history={history}>
      <SignIn {...props} />
    </Router>
  );

describe('SignIn component', () => {
  let props;

  beforeEach(() => {
    props = {
      t: jest.fn(),
      signIn: jest.fn(),
      clearErrors: jest.fn(),
      fetching: false,
      errors: {},
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should render', () => {
    const { container } = buildComponent(props);
    const title = container.querySelector('h1');
    expect(title).toBeTruthy();
  });
});
