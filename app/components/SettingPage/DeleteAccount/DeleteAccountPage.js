import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DotsLoading from '../../LoadingIndicator/dotsLoading';
import DeleteAccountPageFormik from './DeleteAccountPageFormik';
// import './style.css';

function DeleteAccountPage({ tokenId }) {
  const [deletionStatus, setDeletionStatus] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [submitDeletionError, setSubmitDeletionError] = useState(null);

  const handleDelete = values => {
    setLoadingStatus(true);
    axios
      .post(
        'http://localhost:2000/setting/deleteAccount',
        {
          password: values.password,
          token: values.token,
        },
        { withCredentials: true },
      )
      .then(response => {
        console.log('deleteAccount response: ', response);
        if (response.status === 200) {
          setDeletionStatus(true);
          setLoadingStatus(false);
          console.log('succesfully submit your request.');
        } else {
          if (response.status === 225) {
            setSubmitDeletionError({
              status: 'Password is not correct.',
            });
          } else if (response.status === 210) {
            setSubmitDeletionError({
              status: 'Invalid or Expire token',
            });
          } else {
            setSubmitDeletionError({
              status: 'Something went wrong while submitting!',
            });
          }
          setLoadingStatus(false);
          console.log('Something went wrong while re: ', response);
        }
      })
      .catch(error => {
        setLoadingStatus(false);
        setSubmitDeletionError({
          status: 'Something went wrong while submitting!',
        });
        console.log('deleteAccount error: ', error);
      });
  };

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
                    Account Deletion
                  </h6>
                </div>
              </div>
              {deletionStatus === true ? (
                <div className="flex-auto px-4 lg:px-10 py-6 pt-0">
                  <div className="text-gray-600 text-center pb-6">
                    <small>Successfully deleted your account.</small>
                  </div>
                  <div className="text-center mt-6">
                    <Link
                      to="/"
                      className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                    >
                      Home
                    </Link>
                    {/* </div>
                  <div className="text-center mt-6"> */}
                    <Link
                      to="/signup"
                      className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                    >
                      Signup
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="flex-auto px-4 lg:px-10 py-6 pt-0">
                  <div className="relative w-full text-center">
                    {submitDeletionError && (
                      <p className="text-red-600 font-normal text-sm">
                        {submitDeletionError.status}
                      </p>
                    )}
                  </div>
                  <div className="text-gray-600 text-center mb-3">
                    <small>Will miss you. Deleting your account!</small>
                  </div>
                  {loadingStatus === true ? (
                    <DotsLoading loadingText="Loading..." />
                  ) : (
                    <DeleteAccountPageFormik
                      tokenId={tokenId}
                      handleDelete={handleDelete}
                    />
                  )}
                </div>
              )}
            </div>

            {/* <div className="relative flex flex-col min-w-0 break-words w-full mb-6 bg-gray-100 border-2">
              <div className="text-center text-sm mb-0 px-6 py-3">
                <span>New to NetCV? </span>
                <Link
                  to="/signup"
                  className="text-blue-500 hover:text-blue-700"
                >
                  Create an account
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
DeleteAccountPage.propTypes = {
  tokenId: PropTypes.number.isRequired,
};
export default DeleteAccountPage;
