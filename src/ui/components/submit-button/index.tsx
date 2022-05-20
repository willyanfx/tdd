import React from 'react';

type Props = {
  children: React.ReactNode;
  isDisabled: boolean;
};

const SubmitButton: React.FC<Props> = ({ isDisabled, children }: Props) => {
  return (
    <button data-testid="submit" disabled={isDisabled} type="submit">
      {children}
    </button>
  );
};

export default SubmitButton;
