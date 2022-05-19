import React, { memo } from 'react';
import Styles from './login-header.module.scss';

const LoginHeader: React.FC = (props) => {
  return (
    <header className={Styles.headerContainer}>
      <div>Logo</div>
      <h1>Text here</h1>
    </header>
  );
};

export default memo(LoginHeader);
