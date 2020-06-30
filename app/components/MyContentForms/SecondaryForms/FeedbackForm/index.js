/**
 *
 * FeedbackForm
 *
 */

import React, { memo, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Formik, Form } from 'formik';
import axios from 'axios';
import { useToasts } from 'react-toast-notifications';
import { toggleModal } from 'containers/App/actions';
import FeedbackInputs from './FeedbackItems';
import Button from '../../../Button';
import './style.scss';

function FeedbackForm({ dispatch }) {
  const blankFeedbackFields = {
    rating: 5,
    message: '',
  };
  const { addToast } = useToasts();
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
          dispatch(toggleModal());
          addToast('Feedback Submmited!', { appearance: 'info' });
          console.log('succesfully submit feedback');
        } else {
          setSubmitError({ status: 'Something went wrong while submitting!' });
          console.log('Something went wrong while submitting: ', response);
        }
      })
      .catch(error => {
        setSubmitError({ status: 'Something went wrong while submitting!' });
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

FeedbackForm.propTypes = {
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
export default withCompose(FeedbackForm);
