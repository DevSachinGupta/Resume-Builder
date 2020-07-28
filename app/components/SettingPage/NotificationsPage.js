/**
 *
 * NotificationsPage
 *
 */

import React, { memo, useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useToasts } from 'react-toast-notifications';
import { isEqual } from 'lodash';
import { updateNotificationInUserData } from 'containers/App/actions';
import apiClient from '../../utils/app/API';
import DotsLoading from '../LoadingIndicator/dotsLoading';
import Button from '../Button';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function NotificationsPage(props) {
  const { addToast } = useToasts();
  let blankNotificationFields = {
    newFetures: true,
    newsletterAndBlogs: true,
  };
  if (props.userData.settings) {
    blankNotificationFields = {
      newFetures: props.userData.settings.notifications.newFetures,
      newsletterAndBlogs:
        props.userData.settings.notifications.newsletterAndBlogs,
    };
  }
  const [submitError, setSubmitError] = useState(null);
  // TODO : compare with previoues data before submitting
  const handleSave = values => {
    apiClient
      .post('setting/updateNotifications', {
        newFetures: values.newFetures,
        newsletterAndBlogs: values.newsletterAndBlogs,
      })
      .then(response => {
        if (response.status === 200) {
          // TODO : update userData in redux
          props.dispatch(updateNotificationInUserData(values));
          addToast('Successfully update !', { appearance: 'info' });
          console.log('succesfully submit your request.');
        } else {
          setSubmitError({ status: 'Something went wrong while submitting!' });
          addToast('Issue while updating!!!', { appearance: 'error' });
          console.log('Something went wrong while submitting: ', response);
        }
      })
      .catch(error => {
        setSubmitError({ status: 'Something went wrong while submitting!' });
        addToast('Issue while updating!!!', { appearance: 'error' });
        console.log('updateProfile error: ', error.response);
      });
  };

  return (
    <div className="flex-items w-full shadow-md rounded-md border-t border-gray-200 ">
      <Formik
        initialValues={{ ...blankNotificationFields }}
        validationSchema={Yup.object().shape({
          newFetures: Yup.bool(),
          newsletterAndBlogs: Yup.bool(),
        })}
        onSubmit={values => {
          console.log('both values ', values,blankNotificationFields );
          if (!(isEqual(values, blankNotificationFields))) {
            handleSave(values);
          }
        }}
        render={({
          handleSubmit,
          handleChange,
          setFieldValue,
          errors,
          status,
          touched,
          values,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="flex justify-between px-5 pt-3">
              <div className="pl-6 text-xl">Notifications</div>
              <Button as="submit" type="primary" className="text-white">
                Save Changes
              </Button>
            </div>
            <div className="relative w-full text-center">
              {submitError && (
                <p className="text-red-600 font-normal text-sm">
                  {submitError.status}
                </p>
              )}
            </div>

            <div className="md:px-16 pt-5 w-full">
              <div className="mb-4 md:flex ">
                <label className="block text-sm  text-gray-700">
                  Select your notifications options...
                </label>
              </div>
            </div>
            <div className="md:px-16 py-5 border-b w-full">
              <div className="mb-2 justify-center">
                <input
                  className="px-3 py-2 mb-3 focus:outline-none focus:shadow-outline"
                  id="newsletters"
                  name="newsletterAndBlogs"
                  type="checkbox"
                  onChange={handleChange}
                  checked={values.newsletterAndBlogs}
                  // defaultChecked={props.userData.settings.notifications.newsletterAndBlogs || true}
                />
                <label
                  className=" mx-4 mb-2 text-gray-700"
                  htmlFor="newsletters"
                >
                  Blogs and Newsletters
                </label>
                <div className="text-xs text-red-600">
                  {touched.newsletterAndBlogs && errors.newsletterAndBlogs}
                </div>
              </div>
              <div className="mb-2 ">
                <input
                  className="px-3 py-2 mb-3 focus:outline-none focus:shadow-outline"
                  id="newFeatures"
                  name="newFetures"
                  type="checkbox"
                  onChange={handleChange}
                  checked={values.newFetures}
                  // defaultChecked={props.userData.settings.notifications.newFetures || true}
                />
                <label
                  className=" mx-4 mb-2 text-gray-700"
                  htmlFor="newFeatures"
                >
                  New Features
                </label>
                <div className="text-xs text-red-600">
                  {touched.newFetures && errors.newFetures}
                </div>
              </div>
            </div>
          </form>
        )}
      />
    </div>
  );
}

NotificationsPage.propTypes = {};

export default memo(NotificationsPage);
