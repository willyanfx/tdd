import Styles from './input.module.scss';

import React, { useRef } from 'react';

interface InputProps {
  type?: string;
}

const Input: React.FC<InputProps> = ({ type }) => {
  const inputRef = useRef<HTMLInputElement>();
  return (
    <div className={Styles.inputContainer}>
      <input ref={inputRef} placeholder="" type={type} name="" id="" />
      <label htmlFor=""></label>
    </div>
  );
};

export default Input;
