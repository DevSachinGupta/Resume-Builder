/**
 *
 * ShareOnlineForm
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Formik, Form } from 'formik';
import ShareOnlineInputs from './ShareOnlineItems';
import Button from '../../../Button';
import './style.scss';

const url = window.location.href;
const text = 'test';

function ShareOnlineForm() {
  const blankShareOnlineFields = {
    subject: '',
    message: '',
  };

  const handleSave = values => {
    // call fetch with post method in saga
    console.log(values);
  };

  return (
    <Formik
      initialValues={blankShareOnlineFields}
      onSubmit={values => {
        console.log(values);
        handleSave(values);
      }}
    >
      {() => (
        <Form>
          <div className="contactUsSections">
            <div className="contactUsContainer">
              <ShareOnlineInputs url={url} text={text} />
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

ShareOnlineForm.propTypes = {};

export default memo(ShareOnlineForm);
