import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {SignIn} from './component';
import history from '../../routes/history';

const buildComponent = () =>
  render(
      <Router history={history}>
        <SignIn />
      </Router>,
  );

describe('SignIn component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should render', () => {
    const {container} = buildComponent();
    const title = container.querySelector('h1');
    expect(title).toBeTruthy();
  });
});
