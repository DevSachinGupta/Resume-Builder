import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import LoginFormFormik from './LoginForm';
import './style.css';

function LoginForm() {
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
                <div className="text-center mb-3">
                  <h6 className="text-gray-600 text-sm font-bold">
                    Login with
                  </h6>
                </div>
                <div className="btn-wrapper text-center social-login">
                  <button
                    type="button"
                    className="bg-white rounded-full p-1 mr-2"
                  >
                    <FaGoogle />
                  </button>
                  <button type="button" className="bg-white rounded-full p-1">
                    <FaFacebookF />
                  </button>
                </div>
              </div>
              <div className="flex-auto px-4 lg:px-10 py-6 pt-0">
                <div className="text-gray-500 text-center mb-3 font-bold">
                  <small>Or login with credentials</small>
                </div>
                <LoginFormFormik />
              </div>
            </div>

            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 bg-gray-100 border-2">
              <div className="text-center text-sm mb-0 px-6 py-3">
                <span>New to NetCV? </span>
                <Link
                  to="/signup"
                  className="text-blue-500 hover:text-blue-700"
                >
                  Create an account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default LoginForm;
