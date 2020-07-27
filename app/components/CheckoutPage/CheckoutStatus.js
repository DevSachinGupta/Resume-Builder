/**
 *
 * CheckoutStatus
 *
 */

import React, { memo, useState, useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { setPublishDetails } from 'containers/App/actions';
import { makeSelectRedirectionUrl } from 'containers/App/selectors';
import apiClient from '../../utils/app/API';
import history from '../../containers/App/history';
import DotsLoading from '../LoadingIndicator/dotsLoading';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function CheckoutStatus({ redirectUrl, dispatch }) {
  // console.log('page props: ', props);

  let checkoutStatus = '';
  const { addToast } = useToasts();
  const [paymentVerifyStatus, setPaymentVerifyStatus] = useState(true);
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handlePaymentCheck = orderId => {
    setLoadingStatus(true);
    apiClient
      .post('billing/handlePaymentCheck', { orderId })
      .then(response => {
        if (response.status === 200) {
          // TODO : update userData in redux and dispatch to update publishDetails
          console.log('succesfully submit your request.', response);
          setPaymentVerifyStatus(true);
          setLoadingStatus(false);
          setTimeout(() => {
            dispatch(setPublishDetails({ pusblishFlag: true }));
            history.push(redirectUrl);
          }, 3000);
        } else {
          console.log('Something went wrong while submitting: ', response);
          setSubmitError({
            status: 'Something went wrong while submitting!',
          });
          setLoadingStatus(false);
        }
      })
      .catch(error => {
        console.log('updateProfile error: ', error, error.response);
        setSubmitError({
          status: 'Something went wrong while submitting!',
        });
        setLoadingStatus(false);
      });
  };

  useEffect(() => {
    checkoutStatus = window.sessionStorage.getItem('paymentStatus');
    console.log('payemnt Status session: ', checkoutStatus);
    // setTimeout(() => history.push('/builder/97a9ce10-ca6f-11ea-8747-0b9c766c3d99'), 3000);
    // dispatch(setPublishDetails({pusblishFlag: true}));
    // setPublishDetails({pusblishFlag: true})
    setTimeout(() => {
      dispatch(setPublishDetails({ pusblishFlag: true }));
      history.push(redirectUrl);
    }, 3000);
    // setSubmitError({
    //   status: 'Something went wrong while submitting!',
    // });
    // handlePaymentCheck();
  }, []);

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4 mt-5">
            <div className="relative flex flex-col min-w-0 w-full mb-6">
              <div className="text-center text-xl mb-0 px-6 py-3">NetCV.</div>
            </div>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg  bg-gray-300 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center ">
                  <h6 className="text-gray-800 text-md font-bold">
                    Payment Status
                  </h6>
                </div>
              </div>
              {paymentVerifyStatus === true ? (
                <div className="flex-auto px-4 lg:px-10 py-6 pt-0">
                  <div className="text-green-600  text-xl text-center pb-6">
                    <small>Successfully received your payment.</small>
                  </div>
                  <div className="text-center mt-6">
                    <p className="text-center text-xs">
                      {' '}
                      Activating your Account...{' '}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex-auto px-4 lg:px-10 py-6 pt-0">
                  <div className="relative w-full text-center">
                    {submitError && (
                      <p className="text-red-400 font-normal text-sm">
                        {submitError.status}
                      </p>
                    )}
                  </div>
                  {loadingStatus === true ? (
                    <div>
                      <div className="text-gray-600 text-center mb-3">
                        <small>
                          Please wait while we are verifying your payment!
                        </small>
                      </div>
                      <DotsLoading loadingText="Loading..." />
                    </div>
                  ) : (
                    <div>
                      <div className="text-red-600 text-center text-xl pt-4 pb-6">
                        <small>Payment Failed.</small>
                      </div>
                      <div className="text-center mt-6">
                        <Link
                          to="/dashboard"
                          className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                        >
                          Dashboard
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

CheckoutStatus.propTypes = {};
CheckoutStatus.defaultProps = {
  redirectUrl: '/dashboard',
};

const mapStateToProps = createStructuredSelector({
  redirectUrl: makeSelectRedirectionUrl(),
});

const mapDispatchToProps = null;
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(CheckoutStatus);
