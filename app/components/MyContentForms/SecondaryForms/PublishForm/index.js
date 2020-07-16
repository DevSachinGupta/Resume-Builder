/**
 *
 * PublishForm
 *
 */

// import PropTypes from 'prop-types';
import './style.scss';

// Helper styles for demo
import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectPublishType } from 'containers/App/selectors';
import { Formik, Form } from 'formik';
import StepperForm from '../../../StepperForm'
import { FormFirstStep } from './MultiStepForms/FormFirstStep';
import { FormSecondStep } from './MultiStepForms/FormSecondStep';

function PublishForm({publishType , dispatch}) {
  const formData = {
    title: '',
    country: '',
    state: '',
  };
  return (
    <FormFirstStep publishType={publishType} dispatch={dispatch}/>
    // <React.Fragment>
    //   <Formik
    //     // enableReinitialize
    //     initialValues={{ ...formData }}
    //     onSubmit={(values, actions) => {
    //       // eslint-disable-next-line no-console
    //       console.log(values);
    //     }}
    //   >
    //     {({ isValid, setTouched, submitForm, validateForm }) => (
    //       <Form>
    //         <StepperForm
    //           showPreviousButton
    //           isValid={isValid}
    //           setTouched={setTouched}
    //           submitForm={submitForm}
    //           validateForm={validateForm}
    //         >
    //           <FormFirstStep />
    //           <FormSecondStep />
    //         </StepperForm>
    //       </Form>
    //     )}
    //   </Formik>
    // </React.Fragment>
  );
}

PublishForm.propTypes = {};

const mapStateToProps = () =>
  createStructuredSelector({
    publishType: makeSelectPublishType(),
  });
const mapDispatchToProps = null;
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withCompose = compose(
  withConnect,
  memo,
);
export default withCompose(PublishForm);