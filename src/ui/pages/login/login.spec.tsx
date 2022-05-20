import React from 'react';
import { getByTestId, render } from '@testing-library/react';
import { randEmail } from '@ngneat/falso';
import { Login } from './login';
import { Input, SubmitButton } from '@/ui/components';
import Context from '@/ui/contexts/form/form-context';

describe('Login Component', () => {
  test('should start with initial state', () => {
    const { getByTestId } = render(<Login />);
    const errorWrap = getByTestId('error-wrap');
    expect(errorWrap.childElementCount).toBe(0);
  });
  test('should have initial state as disabled', () => {
    const isDisabled = true;
    const text = 'ABC';
    const { getByTestId } = render(
      <SubmitButton isDisabled={isDisabled}>{text}</SubmitButton>
    );
    const submitButton = getByTestId('submit') as HTMLButtonElement;
    expect(submitButton.disabled).toBe(true);
    expect(submitButton.textContent).toBe(text);
  });
  test('should input require email', () => {
    const email = randEmail();
    const title = 'email is required';
    const providerProps = {
      hasError: 'required'
    };
    const { getByTestId } = render(
      <Context.Provider value={providerProps}>
        <Input type="email" />
      </Context.Provider>
    );
    const emailInputStatus = getByTestId('input-status') as HTMLButtonElement;
    expect(emailInputStatus.title).toBe(title);
  });
});
