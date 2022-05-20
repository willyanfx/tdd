import React, { useContext } from 'react';
import Styles from './form.module.scss';
import Spinner from '../spinner';
import Context from '@/ui/contexts/form/form-context';

const FormValidation = () => {
  const { isLoading, errorMessage } = useContext(Context);
  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      {isLoading && <Spinner className={Styles.spinner} />}
      {errorMessage && <span data-testid="main-error"> {errorMessage}</span>}
    </div>
  );
};

export default FormValidation;
