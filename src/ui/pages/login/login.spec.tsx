import { getByTestId, render } from '@testing-library/react';
import React from 'react';
import { Login } from './login';

describe('', () => {
  test('should not render spinner and error', () => {
    const { getByTestId } = render(<Login />);
    const errorWrap = getByTestId('error-wrap');
    expect(errorWrap.childElementCount).toBe(0);
  });
});
