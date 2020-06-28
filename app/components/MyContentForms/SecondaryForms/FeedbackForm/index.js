/**
 *
 * FeedbackForm
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Formik, Form } from 'formik';
import axios from 'axios';
import FeedbackInputs from './FeedbackItems';
import Button from '../../../Button';
import './style.scss';

function FeedbackForm() {
  const blankFeedbackFields = {
    rating: 5,
    message: '',
  };

  const [feedback, setFeedback] = useState(blankFeedbackFields);
  const [submitError, setSubmitError] = useState(null);

  const setRating = rating => {
    const feedbackTemp = { ...feedback };
    feedbackTemp.rating = rating;
    setFeedback(feedbackTemp);
  };
  const handleSave = values => {
    axios
      .post(
        'http://localhost:2000/feedback/addRating',
        {
          rating: values.rating,
          message: values.message,
        },
        { withCredentials: true },
      )
      .then(response => {
        console.log('handleSubmitRating response: ', response);
        if (response.status === 200) {
          // TODO: info on toast -- success case and also Model
          console.log('succesfully submit feedback');
        } else {
          setSubmitError({status:'Something went wrong while submitting!'})
          console.log('Something went wrong while submitting: ', response);
        }
      })
      .catch(error => {
        console.log('handleSubmitRating error: ', error);
      });
  };

  return (
    <Formik
      initialValues={feedback}
      onSubmit={values => {
        console.log(values);
        handleSave(values);
      }}
    >
      {() => (
        <Form>
          <div className="feedbackSections">
            <div className="feedbackContainer">
              <FeedbackInputs setRating={setRating} />
            </div>
            <div className="relative w-full text-center">
              {submitError && (
                <p className="text-red-600 font-normal text-sm">
                  {submitError.status}
                </p>
              )}
            </div>
            {/* <div className="relative w-full text-center">
              {submitError && (
                <p className="text-red-600 font-normal text-sm">
                 Something went wrong while submitting
                </p>
              )}
            </div> */}
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

FeedbackForm.propTypes = {};

export default memo(FeedbackForm);
