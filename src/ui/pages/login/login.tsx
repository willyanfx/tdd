import {
  LoginHeader,
  Footer,
  Input,
  SubmitButton,
  FormValidation
} from '@/ui/components';
import Context from '@/ui/contexts/form/form-context';

import React, { useState } from 'react';
import Styles from './login.module.scss';

type StateProps = {
  isLoading: boolean;
  errorMessage: string;
};

export const Login: React.FC = () => {
  const [state] = useState<StateProps>({
    isLoading: false,
    errorMessage: ''
  });
  return (
    <div className={Styles.loginContainer}>
      <LoginHeader />
      <Context.Provider value={state}>
        <form action="" className={Styles.form}>
          <h2>Login</h2>
          <Input type="email" />
          <Input type="password" />
          <SubmitButton isDisabled={false}>Submit</SubmitButton>
          <FormValidation />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  );
};
