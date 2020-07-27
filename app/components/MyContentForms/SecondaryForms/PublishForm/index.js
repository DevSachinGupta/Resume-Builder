/**
 *
 * PublishForm
 *
 */

import React, { memo, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  updateRedirectionUrl,
  setPublishDetails,
  toggleModal,
} from 'containers/App/actions';
import {
  makeSelectPublishType,
  makeSelectGetCurrentUserData,
} from 'containers/App/selectors';
import { setModalContent } from 'containers/MyContent/actions';
import { makeSelectProjectId } from 'containers/Builder/selectors';
import apiClient from '../../../../utils/app/API';
import DotsLoading from '../../../LoadingIndicator/dotsLoading';
import { Row } from '../../../Layout';
import Button from '../../../Button';
import PricingCardContainer from '../../../Pricing';
import { FormSecondStep } from './MultiStepForms/FormSecondStep';
// import PropTypes from 'prop-types';
import './style.scss';

function PublishForm({ publishType, projectId, userData, dispatch }) {
  console.log('publishType :', publishType);
  useEffect(() => {
    // TODO: check wheather subdomain already published then set page 1 else set page 0
    const { publishFlag } = userData.settings.publishDetails;
    if (publishFlag === true) setCurrentPage(1);
  }, []);

  const blankDomainNameFields = {
    domainName: '',
  };
  const [currentPage, setCurrentPage] = useState(0);
  const [checkoutStatus, setCheckoutStatus] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const checkDomainExitsInDB = values => {
    setLoadingStatus(true);
    apiClient
      .post('bucket/checkDomainExitsInDB', {
        bucketName: values.domainName,
      })
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
    apiClient
      .post('bucket/checkoutDomainName', {
        bucketName: values.domainName,
      })
      .then(response => {
        console.log('checkoutDomainName response: ', response);
        if (response.status === 200) {
          dispatch(setPublishDetails({ publishOnExistingDomain: false }));
          handleContinueWithExisting();
          dispatch(updateRedirectionUrl(`/builder/${projectId}`));
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

  const checkPublishLimitStatus = limitSettings => {
    console.log('limit Settings: ', limitSettings);
    if (limitSettings.publishingCount + 1 > limitSettings.publishingLimit) {
      return false;
    }
    return true;
  };

  const checkChangeDomainLimitStatus = limitSettings => {
    console.log('limit Settings: ', limitSettings);
    if (
      limitSettings.changeSubdomainCount > limitSettings.changeSubdomainLimit
    ) {
      return false;
    }
    return true;
  };

  const handleContinueWithExisting = () => {
    const premium = userData.settings.premiumAccount;
    const limitStatus = checkPublishLimitStatus(
      userData.settings.accountLimits,
    );
    if (premium === true && limitStatus === true) {
      // dispatch publishing function directly
      dispatch(toggleModal());
      dispatch(setModalContent('publishStatus'));
    } else if (premium === true && limitStatus === false) {
      // setCurrentPage == 2 and promt to upgrade account as existing publish limit exceeds
      dispatch(updateRedirectionUrl(`/builder/${projectId}`)); // for payment redirection
      setCurrentPage(2);
    } else {
      // setCurrentPage == 3 as it is not a premium account so promt for plan
      dispatch(updateRedirectionUrl(`/builder/${projectId}`)); // for payment redirection
      setCurrentPage(3);
    }
  };

  const handleChangeExistingSubdomain = () => {
    const premium = userData.settings.premiumAccount;
    const limitStatus = checkChangeDomainLimitStatus(
      userData.settings.accountLimits,
    );
    if (premium === true && limitStatus === true) {
      // promt for changing sub domain
      setCurrentPage(0);
    } else if (premium === true && limitStatus === false) {
      // setCurrentPage == 2 and promt to upgrade account as existing publish limit exceeds
      dispatch(updateRedirectionUrl(`/builder/${projectId}`)); // for payment redirection
      setCurrentPage(2);
    } else {
      // setCurrentPage == 3 as it is not a premium account so promt for plan
      dispatch(updateRedirectionUrl(`/builder/${projectId}`)); // for payment redirection
      setCurrentPage(3);
    }
  };

  return (
    <>
      <Row>
        {(() => {
          switch (currentPage) {
            case 0:
              return (
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
                      domainName: Yup.string().required(
                        'First Name is required',
                      ),
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
                                    onFocus={() => {
                                      if (
                                        submitError &&
                                        submitError.statusSuccess
                                      ) {
                                        setSubmitError(null);
                                      }
                                    }}
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
              );
            case 1:
              return (
                <div>
                  <Row>
                    <div className="flex flex-col min-w-0 w-full mb-6 text-center">
                      <div className="text-center leading-none text-2xl  mb-0 px-6 pb-3">
                        Get Ready to Publish your Resume.
                      </div>
                      {/* <div className="text-base">
                        Choose a plan for your online Resume.
                      </div> */}
                    </div>
                  </Row>
                  <Row>
                    <div className="flex flex-col min-w-0 w-full mb-6 text-center">
                      <div className="text-base">
                        <span>
                          Existing Sub-Domain:{' '}
                          <span className="font-bold">
                            {userData.settings.publishDetails.subDomain}{' '}
                          </span>
                        </span>
                      </div>
                    </div>
                  </Row>
                  <div className="flex w-full justify-center mb-3">
                    <Button
                      type="primary"
                      onClick={() => {
                        dispatch(
                          setPublishDetails({ publishOnExistingDomain: true }),
                        );
                        handleContinueWithExisting();
                      }}
                    >
                      {' '}
                      Continue with existing Sub-Domain
                    </Button>
                  </div>

                  <div className="flex w-full justify-center">
                    <Button
                      type="primary"
                      onClick={() => {
                        handleChangeExistingSubdomain();
                      }}
                    >
                      {' '}
                      Change the existing Sub-Domain
                    </Button>
                  </div>
                </div>
              );
            case 2:
              return (
                <div>
                  <Row>
                    <div className="flex flex-col min-w-0 w-full mb-6 text-center">
                      <div className="text-center leading-none text-2xl  mb-0 px-6 pb-3">
                        Get Ready to Publish your Resume.
                      </div>
                      <div className="text-base">
                        Your Plan limits exceeds. Please upgrade your account!!
                      </div>
                      <div className="mt-4">
                        <Button
                          type="primary"
                          onClick={() => {
                            setCurrentPage(3);
                          }}
                        >
                          {' '}
                          Upgrade Your Account
                        </Button>
                      </div>
                    </div>
                  </Row>
                </div>
              );
            case 3:
              return (
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
                  {(() => {
                    let showStaterPlan = true;
                    let expirenceStaterAlready = false;
                    const premium = userData.settings.premiumAccount;
                    userData.settings.orders.forEach(item => {
                      if (item.planCode === '000')
                        expirenceStaterAlready = true;
                    });
                    // check wheather acct is premium or in past taken stater plan
                    if (premium || expirenceStaterAlready)
                      showStaterPlan = false;
                    return (
                      <PricingCardContainer showStaterPlan={showStaterPlan} />
                    );
                  })()}
                </div>
              );
            default:
              return null;
          }
        })()}
      </Row>
    </>
  );
}

PublishForm.propTypes = {};

const mapStateToProps = () =>
  createStructuredSelector({
    publishType: makeSelectPublishType(),
    projectId: makeSelectProjectId(),
    userData: makeSelectGetCurrentUserData(),
  });
const mapDispatchToProps = null;
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withCompose = compose(
  withConnect,
  memo,
);
export default withCompose(PublishForm);
