/**
 *
 * ContactUsForm
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import axios from 'axios';
import { FaSpinner } from 'react-icons/fa';
import { Formik, Form } from 'formik';
import ContactUsInputs from './ContactUsItems';
import Button from '../../../Button';
import './style.scss';

function ContactUsForm() {
  const blankContactUsFields = {
    subject: '',
    message: '',
  };
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
          setSubmitError({status:' submitting!'})
          console.log('succesfully submit your request.');
        } else {
          setSubmitError({status:'Something went wrong while submitting!'})
          console.log('Something went wrong while submitting: ', response);
        }
      })
      .catch(error => {
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
            <div className="relative w-full text-center">
                <p className="text-red-600 font-normal text-sm">
                  <FaSpinner className="spin"/>
                </p>
            </div>
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

ContactUsForm.propTypes = {};

export default memo(ContactUsForm);
