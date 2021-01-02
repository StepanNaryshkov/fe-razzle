import React from 'react';
import {render} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import {NotFound} from './component';

describe('NotFound component', () => {
  test('should render', () => {
    const {getByTestId} = render(
        <BrowserRouter>
          <NotFound />
        </BrowserRouter>,
    );
    expect(getByTestId('not-found')).toBeTruthy();
  });
});
