import Styles from './spinner.module.scss';

import React from 'react';

const Spinner: React.FC = () => {
  const cls = [Styles.spinner].join(' ');
  return (
    <div data-testid="spinner" className={cls}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

export default Spinner;
