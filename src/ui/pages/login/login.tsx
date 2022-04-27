import {
  LoginHeader,
  Footer,
  Input,
  Spinner,
  SubmitButton
} from '@/ui/components';

import React from 'react';
import Styles from './login.module.scss';

export const Login: React.FC = () => {
  return (
    <div className={Styles.loginContainer}>
      <LoginHeader />
      <form action="" className={Styles.form}>
        <h2>Login</h2>
        <Input />
        <SubmitButton state={false}>Submit</SubmitButton>
        <Spinner />
      </form>
      <Footer />
    </div>
  );
};
