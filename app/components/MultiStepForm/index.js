/**
 *
 * MultiStepForm
 *
 */

import React, { memo, useState } from 'react';
import { Field, Form, Formik, FormikConfig, FormikValues } from 'formik';
import Button from '../Button';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function MultiStepForm(props) {
  const childrenArray = React.Children.toArray(props.children);
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];
  const [completed, setCompleted] = useState(false);

  function isLastStep() {
    return step === childrenArray.length - 1;
  }

  return (
    <Formik
      {...props}
      // validationSchema={currentChild.props.validationSchema}
      onSubmit={async (values, helpers) => {
        console.log("on submit stepper")
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
          setCompleted(true);
        } else {
          setStep(s => s + 1);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form autoComplete="off">
          {currentChild}

          {step > 0 ? (
            <Button
              disabled={isSubmitting}
              type="primary"
              onClick={() => setStep(s => s - 1)}
            >
              Back
            </Button>
          ) : null}
          <Button disabled={isSubmitting} as="submit">
            {isSubmitting ? 'Submitting' : isLastStep() ? 'Submit' : 'Next'}
          </Button>
        </Form>
      )}
    </Formik>
  );
}

MultiStepForm.propTypes = {};

export default memo(MultiStepForm);
