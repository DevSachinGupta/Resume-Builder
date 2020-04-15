/**
 *
 * PublishForm
 *
 */

// import PropTypes from 'prop-types';
import './style.scss';

// FORMIK MUTI STEP WIRZARD Example

// Helper styles for demo
import React, { useState, memo } from 'react';
import * as Yup from 'yup';

// Formik Inputs
import { Formik, Form } from 'formik';
import { FormFirstStep } from './MultiStepForms/FormFirstStep';
import { FormSecondStep } from './MultiStepForms/FormSecondStep';
import { StepButton } from './MultiStepForms/StepButton';

function PublishForm() {
  const [step, setStep] = useState(1);
  const classes = '';
  const formData = {
    bucketUserName: '',
    pricingPlan: '',
  };

  const renderStep = (step, values, errors, touched) => {
    switch (step) {
      case 1:
        return <FormFirstStep errors={errors} touched={touched} />;
      case 2:
        return <FormSecondStep errors={errors} touched={touched} />;
      default:
        return <FormFirstStep errors={errors} touched={touched} />;
    }
  };

  const handleSubmit = () => {console.log("subit") ; setStep(step => step + 1); console.log("subit")}

  const validate = values => {
    console.log(values);
    const errors = {};
    if (!values.bucketUserName) {
      errors.bucketUserName = 'Required';
    }

    console.log(errors);
    return errors;
  };

  return (
    <>
      <div>Multi Step Form using React And Formik</div>
      <Formik
        enableReinitialize
        initialValues={{ ...formData }}
        onSubmit={values => {
          // eslint-disable-next-line no-console
          console.log(values);
          handleSubmit();
        }}
        validate={validate}
      >
        {({ values, errors, touched }) => (
          <Form className={classes.form}>
            {renderStep(step, values, errors, touched)}
            <StepButton step={step} />
          </Form>
        )}
      </Formik>
    </>
  );
}

PublishForm.propTypes = {};

export default memo(PublishForm);
