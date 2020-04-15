import React from 'react';

export const StepButton = props => {
  const { step } = props;
  switch (step) {
    case 1:
      return (
        <>
          <button color="primary" type="submit">
            Continue
          </button>
        </>
      );
    case 2:
      return (
        <>
          <button color="primary" type="submit">
            Submit
          </button>
        </>
      );
    default:
      return <></>;
  }
};
