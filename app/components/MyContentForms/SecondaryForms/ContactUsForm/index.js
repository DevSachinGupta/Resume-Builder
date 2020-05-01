/**
 *
 * ContactUsForm
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Formik, Form } from 'formik';
import ContactUsInputs from './ContactUsItems';
import Button from '../../../Button';
import './style.scss';

function ContactUsForm() {
  const blankContactUsFields = {
    subject: '',
    message: '',
  };

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
    // call fetch with post method in saga
    console.log(values);
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
