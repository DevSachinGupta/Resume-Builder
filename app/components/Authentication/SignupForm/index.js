import React from 'react';
import {TiChevronRight} from 'react-icons/ti';
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import HR from '../../Layout/HR';
import './style.css';
class RegistrationFrom extends React.Component {
  render() {
    return (
      <div className="registrationFormContainer px-10 py-8 bg-gray-800 rounded shadow-2xl w-1/4">
        <div className="header">
          <div className="title text-4xl">Create Account</div>
          <div className="sub-title text-sm text-gray-600">
            Sign in to your account to Continue
          </div>
        </div>
        <form className="registrationForm">
          <div className="input-group">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              placeholder="johndoe@gmail.com"
              className="text-sm"
            />
          </div>
          <div className="input-group">
            <label>
              <span>Password</span>
              <span>Lost Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="text-sm"
            />
          </div>
          <button className="my-4 focus:outline-none rounded-full bg-purple-800 px-10 py-2 text-white hover:shadow-lg text-sm shadow">
            <span>Create account</span>
            <TiChevronRight
              className="ml-1"
              style={{ display: 'inline-block' }}
            />
          </button>
        </form>
        <HR content="Or Continue with" />
        <div className="social-login">
          <button className="google-login mr-2">
            <FaGoogle />
          </button>
          <button className="facebook-login ml-2">
            <FaFacebookF />
          </button>
        </div>
        <div className="footer mt-16">
          <div className="text-xs text-gray-600">
            Not Registered?{' '}
            <Link className="hover:text-gray-700">Create account</Link>
          </div>
        </div>
      </div>
    );
  }
}
export default RegistrationFrom;
