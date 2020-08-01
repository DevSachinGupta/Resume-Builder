/**
 *
 * PublishPage
 *
 */

import React, { memo, useState } from 'react';
import { IoIosLock } from 'react-icons/io';
import { FaRegEdit } from 'react-icons/fa';
import { Formik } from 'formik';
import { useToasts } from 'react-toast-notifications';
import { isEqual } from 'lodash';
import {
  updatePublishType,
  updatePublishSEOInUserData,
  setPublishDetails,
} from 'containers/App/actions';
import { setModalContent } from 'containers/MyContent/actions';
import * as Yup from 'yup';
import apiClient from '../../utils/app/API';
import Button from '../Button';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function PublishPage(props) {
  const { addToast } = useToasts();
  let blankSEOFields = {
    title: '',
    profession: '',
    description: '',
  };
  if (props.userData.settings && props.userData.settings.SEO) {
    blankSEOFields = {
      title: props.userData.settings.SEO.title,
      profession: props.userData.settings.SEO.profession,
      description: props.userData.settings.SEO.description,
    };
  }
  const [submitError, setSubmitError] = useState(null);

  const handleSEOSave = values => {
    apiClient
      .post('setting/updateSEODetails', {
        title: values.title,
        profession: values.profession,
        description: values.description,
      })
      .then(response => {
        if (response.status === 200) {
          props.dispatch(
            updatePublishSEOInUserData(
              values.title,
              values.profession,
              values.description,
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
  return (
    <div className="flex-items w-full shadow-md rounded-md border-t border-gray-200 ">
      <div className="flex justify-between px-5 pt-3">
        <div className="pl-6 text-xl">Publish settings</div>
        {/* <Button as="submit" type="primary" className="text-white">
          Save Changes
        </Button> */}
      </div>
      <div className="relative w-full text-center">
        {submitError && (
          <p className="text-red-600 font-normal text-sm">
            {submitError.status}
          </p>
        )}
      </div>
      <div className="md:px-16 py-5 border-b w-full">
        <div className="mb-4 md:flex flex-row ">
          <div className="w-full flex flex-row items-center mb-4 md:mr-2 md:mb-0">
            <div className="mb-2 pr-2 text-sm  text-gray-700">
              Prublished Project:
            </div>

            {(() => {
              // fetch the project name based on project id
              if (props.userData.settings.publishDetails &&
                props.userData.settings.publishDetails.projectId
              ) {
                const { projectId } = props.userData.settings.publishDetails;
                let projectName = '-';
                props.userData.siteProjects.forEach(item => {
                  if (item.projectId === projectId)
                    projectName = item.projectName;
                });
                return (
                  <div className="px-3 py-2 text-sm leading-tight bg-gray-200 text-gray-700 border focus:outline-none focus:shadow-outline">
                    {projectName}
                  </div>
                );
              }
              return (
                <div
                  className="px-3 py-2 text-sm leading-tight bg-gray-200 text-gray-500 border focus:outline-none focus:shadow-outline"
                  style={{ 'min-width': '50%' }}
                >
                  Not Published
                </div>
              );
            })()}
          </div>
        </div>
        <div className="mb-4 md:flex flex-row ">
          <div className="w-full flex flex-row items-center mb-4 md:mr-2 md:mb-0">
            <label htmlFor="toggle" className="pr-3 text-xs text-gray-700">
              Display NetCV Branding
            </label>
            <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
              <input
                type="checkbox"
                name="toggle"
                checked={!props.userData.settings.premiumAccount}
                id="toggle"
                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
              />
              <label
                htmlFor="toggle"
                className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
              />
            </div>
            <IoIosLock />
          </div>
        </div>
        <div className="mb-4 ">
          <div className="w-full flex flex-row items-center mb-2 md:mr-2 md:mb-0">
            <div className="mb-2 pr-2 text-sm  text-gray-700 whitespace-no-wrap">
              Published Subdomain:
            </div>
            {props.userData.settings.publishDetails &&
            props.userData.settings.publishDetails.subDomain ? (
              <div className="flex flex-row justify-between">
                <div className=" w-full px-3 py-2 text-sm leading-tight bg-gray-200 text-gray-700 border focus:outline-none focus:shadow-outline">
                    {props.userData.settings.publishDetails.subDomain}
                    {/* jitendra-prajapati.netcv.co.in */}
                  </div>
                  <Button
                  title="Edit"
                  className="ml-2 text-gray-700 border-gray-200 px-1 py-1 text-sm"
                  onClick={() => {
                    // props.dispatch(updatePublishType('CopyDomain'));
                    props.dispatch(setPublishDetails({ copySubDomainFlag: true, paymentOnlyFlag: false }));
                    props.dispatch(setModalContent('publish'));
                  }}
                >
                  <FaRegEdit size={22} className="bg-white text-teal-500" />
                  </Button>
                </div>
            ) : (
                <div className="w-full px-3 py-2 text-sm leading-tight bg-gray-200 text-gray-500 border focus:outline-none focus:shadow-outline">
                -
                </div>
              )}
          </div>
          <div className="w-full flex flex-row items-center mb-4 md:mr-2 md:mb-0">
            <a
              className="mb-2 pl-2 text-xs cursor-pointer text-blue-400"
              onClick={() => {
                props.dispatch(setModalContent('customDomain'));
              }}
            >
              Ckeck For Custom Domain.
            </a>
          </div>
        </div>
      </div>
      <Formik
        initialValues={{ ...blankSEOFields }}
        validationSchema={Yup.object().shape({
          title: Yup.string(),
          profession: Yup.string(),
          description: Yup.string(),
        })}
        onSubmit={values => {
          console.log('both balues', values, blankSEOFields);
          if (!isEqual(values, blankSEOFields)) {
            console.log('onSubmit values', values);
            handleSEOSave(values);
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
              <div className="pl-6 text-xl">Search Engine Optimization</div>
              <Button as="submit" type="primary" className="text-white">
                Save Changes
              </Button>
            </div>
            <div className="md:px-16 py-5 border-b w-full">
              <div className="mb-4 md:flex md:justify-between">
                <div className="text-xs text-gray-700">
                  Specify information about you. it will help search engines
                  find your content.
                </div>
              </div>
              <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0 w-1/2">
                  <label
                    className="block mb-2 text-sm  text-gray-700"
                    htmlFor="title"
                  >
                    Title
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight bg-gray-200 text-gray-700 border focus:outline-none focus:shadow-outline"
                    id="title"
                    name="title"
                    type="text"
                    onChange={handleChange}
                    value={values.title}
                    placeholder="Title"
                  />
                  <div className="text-xs text-red-600">
                    {touched.title && errors.title}
                  </div>
                </div>
                <div className="md:ml-2 w-1/2">
                  <label
                    className="block mb-2 text-sm  text-gray-700"
                    htmlFor="profession"
                  >
                    Profession
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight bg-gray-200 text-gray-700 border focus:outline-none focus:shadow-outline"
                    id="profession"
                    name="profession"
                    type="text"
                    onChange={handleChange}
                    value={values.profession}
                    placeholder="Profession"
                  />
                  <div className="text-xs text-red-600">
                    {touched.profession && errors.profession}
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm  text-gray-700"
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  className="h-32 w-full px-3 py-2 mb-3 text-sm leading-tight bg-gray-200 text-gray-700 border focus:outline-none focus:shadow-outline"
                  id="description"
                  name="description"
                  // type="textarea"
                  onChange={handleChange}
                  value={values.description}
                  placeholder="Provide your description"
                  // defaultValue={props.userData.settings.SEO.description || ''}
                />
                <div className="text-xs text-red-600">
                  {touched.description && errors.description}
                </div>
              </div>
            </div>
          </form>
        )}
      />
    </div>
  );
}

PublishPage.propTypes = {};

export default memo(PublishPage);
