import React from 'react';
import { render } from '@testing-library/react';
import { PageSpinner } from './component';

describe('Page spinner component', () => {
  test('should render', () => {
    const { container } = render(<PageSpinner />);
    expect(container.querySelector("[data-testid='loader']")).toBeTruthy();
  });
});
