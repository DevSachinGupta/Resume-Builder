/**
 *
 * StepperForm
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
// import styled from 'styled-components';

function StepperForm(props) {
  const [currentStep, setCurrentStep] = useState(0);
  const lastStep = props.children.length - 1;

  const previousButtonClick = () => {
    setCurrentStep(Math.min(currentStep - 1, 0));
  };
  const nextButtonClick = () => {
    props
      .submitForm()
      .then(() => {
        if (props.isValid) {
          setCurrentStep(Math.min(currentStep + 1, lastStep));
          props.validateForm();
          props.setTouched({});
          if (currentStep === lastStep) {
            // props.finalSubmit();
          }
        }
      })
      .catch(console.log('error'));
  };
  return (
    <div className="stepper">
      {props.children[currentStep]}
      {props.showPreviousButton && currentStep !== 0 ? (
        <Button type="button" onClick={previousButtonClick}>
          Previous
        </Button>
      ) : (
        ''
      )}
      <Button
        type={currentStep === lastStep ? 'Submit' : 'button'}
        onClick={nextButtonClick}
      >
        {currentStep === lastStep ? 'Submit' : 'Continue'}
      </Button>
    </div>
  );
}

StepperForm.propTypes = {
  isValid: PropTypes.bool,
  submitForm: PropTypes.func,
  setTouched: PropTypes.func,
  validateForm: PropTypes.func,
  showPreviousButton: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default memo(StepperForm);
