/**
 *
 * SettingPage
 *
 */

import React, { memo, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Formik } from 'formik';
import { useToasts } from 'react-toast-notifications';
import { isEqual } from 'lodash';
import { updateProfileInUserData } from 'containers/App/actions';
import * as Yup from 'yup';
import apiClient from '../../utils/app/API';
import Button from '../Button';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function ProfilePage(props) {
  const { addToast } = useToasts();
  let blankProfileFields = {
    firstName: '',
    lastName: '',
    profileImageUrl: '',
  };
  if (props.userData) {
    blankProfileFields = {
      firstName: props.userData.firstName,
      lastName: props.userData.lastName,
      profileImageUrl: null,
      // profileImageUrl: props.userData.settings.profileImageUrl,
    };
  }
  const [submitError, setSubmitError] = useState(null);
  const [submitDeletionError, setSubmitDeletionError] = useState(null);

  const checkIfFilesAreTooBig = file => {
    let valid = true;
    console.log('filesize:', file);
    if (file) {
      const size = file.size / 1024 / 1024;
      console.log('filesize:', file.size);
      if (size > 15) {
        valid = false;
      }
    }
    return valid;
  };

  const checkIfFilesAreCorrectType = file => {
    let valid = true;
    if (file) {
      if (!['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) {
        valid = false;
      }
    }
    return valid;
  };

  // TODO : compare with previoues data before submitting
  const handleSave = values => {
    const formData = new FormData();
    formData.append('firstName', values.firstName);
    formData.append('lastName', values.lastName);
    formData.append('file', values.profileImageUrl);

    apiClient
      .post('setting/updateProfile', formData, {"Accept": "application/json"})
      .then(response => {
        if (response.status === 200) {
          // TODO : update userData in redux
          props.dispatch(
            updateProfileInUserData(
              response.data.data.firstName,
              response.data.data.lastName,
              response.data.data.profileImageUrl,
            ),
          );
          addToast('Successfully update !', { appearance: 'info' });
          console.log('succesfully submit your request.', response);
        } else {
          setSubmitError({ status: 'Something went wrong while submitting!' });
          addToast('Issue while updating!!!', { appearance: 'error' });
          console.log('Something went wrong while submitting: ', response);
        }
      })
      .catch(error => {
        setSubmitError({ status: 'Something went wrong while submitting!' });
        addToast('Issue while updating!!!', { appearance: 'error' });
        console.log('updateProfile error: ', error, error.response);
      });
  };
  const handleDelete = () => {
    apiClient
      .post('setting/deleteAccountRequest', {})
      .then(response => {
        console.log('deleteAccountRequest response: ', response);
        if (response.status === 200) {
          setSubmitDeletionError({
            status: 'Delete account request send to your email.',
          });
          console.log('succesfully submit your request.');
        } else {
          setSubmitDeletionError({
            status: 'Something went wrong while submitting!',
          });
          console.log('Something went wrong while re: ', response);
        }
      })
      .catch(error => {
        console.log('deleteAccountRequest error: ', error);
      });
  };

  return (
    <div className="flex-items w-full shadow-md rounded-md border-t border-gray-200 ">
      <Formik
        initialValues={{ ...blankProfileFields }}
        validationSchema={Yup.object().shape({
          profileImageUrl: Yup.mixed()
            .nullable()
            // .required('Profile image is required')
            .test(
              'is-big-file',
              'Image size sholud less thwn 5 MB',
              checkIfFilesAreTooBig,
            )
            .test(
              'is-correct-file',
              'Image type should be from jpg/jpeg/png',
              checkIfFilesAreCorrectType,
            ),
          // profileImageUrl: Yup.string().required('profileImageUrl is required'),
          firstName: Yup.string().required('First Name is required'),
          lastName: Yup.string().required('Last Name is required'),
        })}
        onSubmit={values => {
          console.log("both balues", values,blankProfileFields)
          if (!(isEqual(values, blankProfileFields))) {
            console.log('onSubmit values', values);
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
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            {console.log('values:', values.profileImageUrl)}
            <div className="flex justify-between px-5 pt-3">
              <div className="pl-6 text-xl">Profile</div>
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
            <div className="md:px-16 py-5 border-b w-full">
              <div className="mb-4 md:flex ">
                <div className="mb-4 md:mr-2 md:mb-0">
                  <div className="rounded-full border-8 border-gray-200">
                    {props.userData.settings.profileImageUrl ? (
                      <img
                        className="rounded-full"
                        // src="https://lh3.googleusercontent.com/-biPvuIkz-PE/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnj_WXp169yeuyw2n9nG3_RZFdiGg/s50/photo.jpg"
                        src={props.userData.settings.profileImageUrl}
                        width="50"
                        height="50"
                        alt=""
                      />
                    ) : (
                      <FaUserCircle size={52} class="bg-white rounded-full" />
                    )}
                  </div>
                </div>
                <div className="md:ml-2">
                  <label className="block mb-2 text-sm  text-gray-700">
                    Upload your avatar image (size up to 256 x 256)
                  </label>
                  <label htmlFor="upload" className="my-2 py-1 px-2 text-white rounded bg-blue-500 cursor-pointer">
                    Upload
                  </label>
                  {/* <button class="bg-blue-500 hover:bg-blue-light py-2 px-4 rounded inline-flex items-center">
              <svg fill="#FFF" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"/>
                </svg>
                <span class="ml-2">Upload</span>
            </button> */}
                  <input
                    className="cursor-pointer absolute block py-2 px-4 w-full opacity-0 pin-r pin-t appearance-none "
                    id="upload"
                    type="file"
                    name="profileImageUrl"
                    accept="image/*"
                    onChange={event => {
                      console.log('fileData: ', event.currentTarget.files);
                      setFieldValue(
                        'profileImageUrl',
                        event.currentTarget.files[0],
                      );
                    }}
                  />
                  <div className="text-xs text-red-600">
                    {touched.profileImageUrl && errors.profileImageUrl}
                  </div>
                </div>
              </div>
            </div>
            <div className="md:px-16 py-5 border-b w-full">
              <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0 w-1/2">
                  <label
                    className="block mb-2 text-sm  text-gray-700"
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight bg-gray-200 text-gray-700 border focus:outline-none focus:shadow-outline"
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={handleChange}
                    value={values.firstName}
                    placeholder="First Name"
                  />
                  <div className="text-xs text-red-600">
                    {touched.firstName && errors.firstName}
                  </div>
                </div>
                <div className="md:ml-2 w-1/2">
                  <label
                    className="block mb-2 text-sm  text-gray-700"
                    htmlFor="lastName"
                  >
                    Last Name
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight bg-gray-200 text-gray-700 border focus:outline-none focus:shadow-outline"
                    id="lastName"
                    name="lastName"
                    type="text"
                    onChange={handleChange}
                    value={values.lastName}
                    placeholder="Last Name"
                  />
                  <div className="text-xs text-red-600">
                    {touched.lastName && errors.lastName}
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm  text-gray-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight bg-gray-200 text-gray-700 border focus:outline-none focus:shadow-outline cursor-not-allowed"
                  id="email"
                  name="registeredEmail"
                  type="email"
                  placeholder="Email"
                  defaultValue={props.userData.registeredEmail || ''}
                  readOnly
                />
              </div>
            </div>
          </form>
        )}
      />
      <div className="md:px-16 py-5 border-b w-full">
        <div className="mb-4 md:flex ">
          <div className="md:ml-2">
            <label
              className="block mb-2 text-sm  text-gray-700"
              htmlFor="lastName"
            >
              Start the process to delete your account
            </label>
            <Button
              className="text-white bg-red-500"
              onClick={e => {
                handleDelete();
              }}
            >
              Delete Account
            </Button>
            <div className="relative w-full text-center">
              {submitDeletionError && (
                <p className="text-red-600 font-normal text-sm">
                  {submitDeletionError.status}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ProfilePage.propTypes = {};

export default memo(ProfilePage);
