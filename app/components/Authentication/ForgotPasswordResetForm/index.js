import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../../Button';
import ForgotPasswordResetFormFormik from './ForgotPasswordResetForm';
import './style.css';

function ForgotPasswordResetForm({ tokenId }) {
  const [resetSuccessfullly, setResetSuccessfullly] = useState(false);
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
                    Reset Your Password?
                  </h6>
                </div>
              </div>
              {resetSuccessfullly === true ? (
                <div className="flex-auto px-4 lg:px-10 py-6 pt-0">
                  <div className="text-gray-600 text-center mb-3">
                    <small>
                      Successfully reset your new password! You can login with
                      your new password.
                    </small>
                  </div>
                  <div className="text-center mt-6">
                    <Link
                      to="/login"
                      className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                    >
                      Login
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="flex-auto px-4 lg:px-10 py-6 pt-0">
                  <div className="text-gray-600 text-center mb-3">
                    <small>
                      Just enter a new password and you'll be on your way.
                      Remember your new password!
                    </small>
                  </div>
                  <ForgotPasswordResetFormFormik
                    tokenId={tokenId}
                    setResetSuccessfullly={setResetSuccessfullly}
                  />
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
ForgotPasswordResetForm.propTypes = {
  tokenId: PropTypes.number.isRequired,
};
export default ForgotPasswordResetForm;
