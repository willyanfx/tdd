import Styles from './spinner.module.scss';

import React from 'react';

type Props = React.HTMLAttributes<HTMLElement> & {
  is?: boolean;
};

const Spinner: React.FC<Props> = ({ is, ...props }: Props) => {
  const cls = [Styles.spinner, props.className].join(' ');
  return (
    <div {...props} data-testid="spinner" className={cls}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

export default Spinner;
