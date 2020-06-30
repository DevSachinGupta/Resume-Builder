import React, { useState } from 'react';
import { Formik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import DotsLoading from '../../../../LoadingIndicator/dotsLoading';
import { FormSecondStep } from './FormSecondStep';
import { Row, Column } from '../../../../Layout';

export const FormFirstStep = () => {
  const blankDomainNameFields = {
    domainName: '',
  };
  const [currentPage, setCurrentPage] = useState(0);
  const [checkoutStatus, setCheckoutStatus] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const checkDomainExitsInDB = values => {
    setLoadingStatus(true);
    axios
      .post(
        'http://localhost:2000/bucket/checkDomainExitsInDB',
        {
          bucketName: values.domainName,
        },
        { withCredentials: true },
      )
      .then(response => {
        console.log('checkDomainExitsInDB response: ', response);
        if (response.status === 200) {
          setSubmitError({ statusSuccess: 'Domain does exists!' });
          console.log('succesfully submit your request.');
        } else if (response.status === 204) {
          setSubmitError({ statusFailer: 'Domain already taken!' });
          console.log('Something went wrong while submitting: ', response);
        } else {
          setSubmitError({
            statusFailer: 'Something went wrong while submitting!',
          });
          console.log('Something went wrong while submitting: ', response);
        }
        setLoadingStatus(false);
      })
      .catch(error => {
        setLoadingStatus(false);
        setSubmitError({
          statusFailer: 'Something went wrong while submitting!',
        });
        console.log('checkDomainExitsInDB error: ', error);
      });
  };

  const checkoutDomainName = values => {
    setLoadingStatus(true);
    axios
      .post(
        'http://localhost:2000/bucket/checkoutDomainName',
        {
          bucketName: values.domainName,
        },
        { withCredentials: true },
      )
      .then(response => {
        console.log('checkoutDomainName response: ', response);
        if (response.status === 200) {
          setCurrentPage(1);
          // setSubmitError({ statusSuccess: 'Domain does exists!' });
          console.log('succesfully submit your request.');
        } else if (response.status === 204) {
          setSubmitError({ statusFailer: 'Domain already taken!' });
          console.log('Something went wrong while submitting: ', response);
        } else {
          setSubmitError({
            statusFailer: 'Something went wrong while submitting!',
          });
          console.log('Something went wrong while submitting: ', response);
        }
        setLoadingStatus(false);
      })
      .catch(error => {
        setLoadingStatus(false);
        setSubmitError({
          statusFailer: 'Something went wrong while submitting!',
        });
        console.log('checkoutDomainName error: ', error);
      });
  };

  return (
    <>
      <Row>
        {currentPage === 0 ? (
          <div>
            <Row>
              <div className="flex flex-col min-w-0 w-full mb-6 text-center">
                <div className="text-center leading-none text-2xl  mb-0 px-6 pb-3">
                  Get Ready to Publish your Resume.
                </div>
                <div className="text-base">
                  Choose a profile link for your online Resume.
                </div>
              </div>
            </Row>
            <Formik
              initialValues={{ ...blankDomainNameFields }}
              validationSchema={Yup.object().shape({
                domainName: Yup.string().required('First Name is required'),
              })}
              onSubmit={values => {
                console.log('onSubmit values', values);
                if (values.publish === 0) {
                  checkDomainExitsInDB(values);
                } else if (values.publish === 1) {
                  checkoutDomainName(values);
                }
              }}
              render={({
                handleSubmit,
                handleChange,
                setFieldValue,
                errors,
                touched,
                values,
              }) => (
                <div>
                  <form onSubmit={handleSubmit}>
                    <div className="justify-center items-center border-4 border-dashed mx-auto border-orange-500 max-w-2xl py-4 px-4">
                      <div className="lg:flex md:flex text-xl ">
                        <div className="flex justify-center font-semibold p-2">
                          <div className="justify-between">
                            <input
                              type="text"
                              className="focus:outline-none border rounded px-2 py-1"
                              name="domainName"
                              placeholder="User Profile"
                              onChange={handleChange}
                              value={values.domainName}
                            />
                            <div className="text-xs text-red-600">
                              {touched.domainName && errors.domainName}
                            </div>
                          </div>
                          <span className="text-orange-500 mx-1 text-3xl mb-1">
                            .
                          </span>
                          <span className="text-gray-800 my-auto">
                            netcv.co.in
                          </span>
                        </div>
                        <button
                          type="button"
                          className="px-4 py-1 my-2 rounded-full focus:outline-none bg-orange-500 text-white shadow ml-2"
                          onClick={() => {
                            setFieldValue('publish', 0, false);
                            handleSubmit();
                          }}
                        >
                          Check
                        </button>
                      </div>
                      <div className="text-center">
                        {submitError && submitError.statusFailer && (
                          <p className="text-red-500">
                            <small>{submitError.statusFailer}</small>
                          </p>
                        )}
                        {submitError && submitError.statusSuccess && (
                          <p className="text-green-500">
                            <small>{submitError.statusSuccess}</small>
                          </p>
                        )}
                      </div>
                    </div>

                    {submitError && submitError.statusSuccess && (
                      <div className="text-center mt-4">
                        <button
                          type="button"
                          className="px-4 py-1 my-2 rounded-sm focus:outline-none bg-gray-800 text-white shadow ml-2"
                          onClick={() => {
                            setFieldValue('publish', 1, false);
                            handleSubmit();
                          }}
                        >
                          Checkout Domain
                        </button>
                      </div>
                    )}
                    {loadingStatus && (
                      <div className="text-center mt-4">
                        <DotsLoading loadingText="Please Wait..." />
                      </div>
                    )}
                  </form>
                </div>
              )}
            />
          </div>
        ) : (
          <div>
            <Row>
              <div className="flex flex-col min-w-0 w-full mb-6 text-center">
                <div className="text-center leading-none text-2xl  mb-0 px-6 pb-3">
                  Get Ready to Publish your Resume.
                </div>
                <div className="text-base">
                  Choose a plan for your online Resume.
                </div>
              </div>
            </Row>
            <FormSecondStep />
          </div>
        )}
      </Row>
    </>
  );
};
