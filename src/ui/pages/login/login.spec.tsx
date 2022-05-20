import { SubmitButton } from '@/ui/components';
import { getByTestId, render } from '@testing-library/react';
import React from 'react';
import { Login } from './login';

describe('Login Component', () => {
  test('should start with initial state', () => {
    const { getByTestId } = render(<Login />);
    const errorWrap = getByTestId('error-wrap');
    expect(errorWrap.childElementCount).toBe(0);
  });
  test('', () => {
    const isDisabled = true;
    const text = 'ABC';
    const { getByTestId } = render(
      <SubmitButton isDisabled={isDisabled}>{text}</SubmitButton>
    );
    const submitButton = getByTestId('submit') as HTMLButtonElement;
    expect(submitButton.disabled).toBe(true);
    expect(submitButton.textContent).toBe(text);
  });
});
