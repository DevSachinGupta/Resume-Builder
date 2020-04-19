/**
 *
 * PublishForm
 *
 */

// import PropTypes from 'prop-types';
import './style.scss';

// Helper styles for demo
import React, { memo } from 'react';

// Formik Inputs
import { Formik, Form } from 'formik';
import StepperForm from '../../../StepperForm'
import { FormFirstStep } from './MultiStepForms/FormFirstStep';
import { FormSecondStep } from './MultiStepForms/FormSecondStep';

function PublishForm() {
  const formData = {
    title: '',
    country: '',
    state: '',
  };
  return (
    <React.Fragment>
      <div>Multi Step Form using React And Formik</div>
      <Formik
        // enableReinitialize
        initialValues={{ ...formData }}
        onSubmit={(values, actions) => {
          // eslint-disable-next-line no-console
          console.log(values);
        }}
      >
        {({ isValid, setTouched, submitForm, validateForm }) => (
          <Form>
            <StepperForm
              showPreviousButton
              isValid={isValid}
              setTouched={setTouched}
              submitForm={submitForm}
              validateForm={validateForm}
            >
              <FormFirstStep />
              <FormSecondStep />
            </StepperForm>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
}

PublishForm.propTypes = {};

export default memo(PublishForm);
