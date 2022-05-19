import React from 'react';
import Styles from './form.module.scss';
import Spinner from '../spinner';

type Props = {
  state?: {
    isLoading?: boolean;
    hasError?: string;
  };
};

const FormValidation = ({ state }: Props) => {
  const { isLoading, hasError } = state;
  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      {isLoading && <Spinner className={Styles.spinner} />}
      {hasError && <span data-testid="main-error"> {hasError}</span>}
    </div>
  );
};

export default FormValidation;
