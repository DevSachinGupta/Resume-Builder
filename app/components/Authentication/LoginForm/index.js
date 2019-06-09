import React from 'react';
import './style.css';
class LoginForm extends React.Component {
  render() {
    return (
      <div className="loginFormContainer px-10 py-8 bg-gray-800 rounded shadow-lg w-1/4">
        <div className="header">
          <div className="title text-4xl">Login</div>
          <div className="sub-title text-sm text-gray-700">
            Sign in to your account to Continue
          </div>
        </div>
        <form className="loginForm">
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
            <input type="password" name="password" placeholder="password" className="text-sm" />
          </div>
          <button className="my-4 focus:outline-none rounded-full bg-purple-800 px-10 py-2 text-white text-sm shadow">
            Sign in
          </button>
        </form>
        <div className="footer mt-16">
          <div className="text-xs text-gray-600">
            Not Registered? Create account
          </div>
        </div>
      </div>
    );
  }
}
export default LoginForm;
