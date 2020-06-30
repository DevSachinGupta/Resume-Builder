/**
 *
 * ContactUsForm
 *
 */

import React, { memo, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import cx from 'classnames';
import axios from 'axios';
import { Formik, Form } from 'formik';
import { useToasts } from 'react-toast-notifications';
import { toggleModal } from 'containers/App/actions';
import DotsLoading from '../../../LoadingIndicator/dotsLoading';
import ContactUsInputs from './ContactUsItems';
import Button from '../../../Button';
import './style.scss';

function ContactUsForm({ dispatch }) {
  const blankContactUsFields = {
    subject: '',
    message: '',
  };
  const { addToast } = useToasts();
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const subjectsList = [
    {
      id: 1,
      name: 'Information',
    },
    {
      id: 2,
      name: 'Suggestion',
    },
    {
      id: 3,
      name: 'Query',
    },
    {
      id: 4,
      name: 'Complain',
    },
  ];

  const handleSave = values => {
    setLoadingStatus(true);
    axios
      .post(
        'http://localhost:2000/contactUs/addContactUs',
        {
          subject: values.subject,
          message: values.message,
        },
        { withCredentials: true },
      )
      .then(response => {
        console.log('addContactUs response: ', response);
        if (response.status === 200) {
          dispatch(toggleModal());
          addToast('Feedback Submmited!', { appearance: 'info' });
          console.log('succesfully submit your request.');
        } else {
          setSubmitError({ status: 'Something went wrong while submitting!' });
          console.log('Something went wrong while submitting: ', response);
        }
        setLoadingStatus(false);
      })
      .catch(error => {
        setLoadingStatus(false);
        setSubmitError({ status: 'Something went wrong while submitting!' });
        console.log('addContactUs error: ', error);
      });
  };

  return (
    <Formik
      initialValues={blankContactUsFields}
      onSubmit={values => {
        console.log(values);
        handleSave(values);
      }}
    >
      {() => (
        <Form>
          <div className="contactUsSections">
            <div className="contactUsContainer">
              <ContactUsInputs subjectsList={subjectsList} />
            </div>
            <div className="relative w-full text-center">
              {submitError && (
                <p className="text-red-600 font-normal text-sm">
                  {submitError.status}
                </p>
              )}
            </div>
            {loadingStatus && <DotsLoading loadingText="Submitting..." />}
            <div className={cx('footerContainer')}>
              <Button as="submit" fullWidth type="primary">
                Submit
              </Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

ContactUsForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = () => createStructuredSelector({});

const mapDispatchToProps = null;
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withCompose = compose(
  withConnect,
  memo,
);
export default withCompose(ContactUsForm);
