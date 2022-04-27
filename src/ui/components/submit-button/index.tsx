import React from 'react';

type Props = {
  children: React.ReactNode;
  state: any;
};

const SubmitButton: React.FC<Props> = ({ state, children }: Props) => {
  return (
    <button data-testid="submit" disabled={state.isFormInvalid} type="submit">
      {children}
    </button>
  );
};

export default SubmitButton;
