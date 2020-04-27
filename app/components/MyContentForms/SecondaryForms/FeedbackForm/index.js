/**
 *
 * FeedbackForm
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Formik, Form } from 'formik';
import FeedbackInputs from './FeedbackItems';
import Button from '../../../Button';
import './style.scss';

function FeedbackForm() {
  const blankFeedbackFields = {
    rating: 5,
    message: '',
  };

  const [feedback, setFeedback] = useState(blankFeedbackFields);

  const setRating = rating => {
    const feedbackTemp = { ...feedback };
    feedbackTemp.rating = rating;
    setFeedback(feedbackTemp);
  };
  const handleSave = values => {
    // call fetch with post method in saga
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
