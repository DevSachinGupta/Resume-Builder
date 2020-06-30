import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DotsLoading from '../../LoadingIndicator/dotsLoading';
// import './style.css';

function AccountVerifyPage({ tokenId }) {
  const [accountVerifyStatus, setAccountVerifyStatus] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [submitAccountVerifyError, setSubmitAccountVerifyError] = useState(
    null,
  );

  const handleVerify = () => {
    setLoadingStatus(true);
    axios
      .post(
        'http://localhost:2000/accountVerify',
        {
          token: tokenId,
        },
        { withCredentials: true },
      )
      .then(response => {
        console.log('accountVerify response: ', response);
        if (response.status === 200) {
          setAccountVerifyStatus(true);
          setLoadingStatus(false);
          console.log('succesfully submit your request.');
        } else {
          if (response.status === 210) {
            setSubmitAccountVerifyError({
              status: 'Invalid or Expire token',
            });
          } else {
            setSubmitAccountVerifyError({
              status: 'Something went wrong while submitting!',
            });
          }
          setLoadingStatus(false);
          console.log('Something went wrong while re: ', response);
        }
      })
      .catch(error => {
        setLoadingStatus(false);
        setSubmitAccountVerifyError({
          status: 'Something went wrong while submitting!',
        });
        console.log('accountVerify error: ', error);
      });
  };

  useEffect(() => {
    handleVerify();
  }, []);

  return (
    <section className="h-screen bg-gray-100 ">
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
                    Account Verification
                  </h6>
                </div>
              </div>
              {accountVerifyStatus === true ? (
                <div className="flex-auto px-4 lg:px-10 py-6 pt-0">
                  <div className="text-gray-600 text-center pb-6">
                    <small>Successfully verify your account.</small>
                  </div>
                  <div className="text-center mt-6">
                    {/* <Link
                      to="/"
                      className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                    >
                      Home
                    </Link> */}
                    <Link
                      to="/login"
                      className="bw-full g-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                    >
                      Login
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="flex-auto px-4 lg:px-10 py-6 pt-0">
                  <div className="relative w-full text-center">
                    {submitAccountVerifyError && (
                      <p className="text-red-600 font-normal text-sm">
                        {submitAccountVerifyError.status}
                      </p>
                    )}
                  </div>
                  {loadingStatus === true ? (
                    <div>
                      <div className="text-gray-600 text-center mb-3">
                        <small>
                          Please wait while we are verifying your account!
                        </small>
                      </div>
                      <DotsLoading loadingText="Loading..." />
                    </div>
                  ) : (
                    <div className="text-center mt-6">
                      <Link
                        to="/signup"
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                      >
                        Signup
                      </Link>
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
AccountVerifyPage.propTypes = {
  tokenId: PropTypes.number.isRequired,
};
export default AccountVerifyPage;
