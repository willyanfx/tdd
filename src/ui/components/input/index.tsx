import React, { useContext, useRef } from 'react';
import Context from '@/ui/contexts/form/form-context';
import Styles from './input.module.scss';

interface InputProps {
  type?: string;
}

const Input: React.FC<InputProps> = ({ type }) => {
  const { hasError } = useContext(Context);
  const errorMessage = `${type} is ${hasError}`;
  const inputRef = useRef<HTMLInputElement>();

  return (
    <div className={Styles.inputContainer}>
      <input ref={inputRef} placeholder="" type={type} name="" id={`${type}`} />
      {hasError && (
        <span
          data-testid="input-status"
          title={errorMessage}
          className={Styles.status}
        >
          🛑
        </span>
      )}
    </div>
  );
};

export default Input;
