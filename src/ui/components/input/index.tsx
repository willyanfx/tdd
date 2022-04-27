import Styles from './input.module.scss';

import React, { useRef } from 'react';

const Input: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>();
  return (
    <div className={Styles.inputContainer}>
      <input ref={inputRef} placeholder="" type="email" name="" id="" />
      <label htmlFor=""></label>
    </div>
  );
};

export default Input;
