import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaLinkedin, FaGithub } from 'react-icons/fa';
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import LoginFormFormik from './LoginForm';
import './style.css';

function LoginForm() {
  const responseGoogle = res => {
    console.log(
      'google data:', res, 'data res json',
      JSON.stringify({ access_token: res.accessToken }, null, 2),
    );
    console.log('google data res:', res);
    // const tokenBlob = new Blob([JSON.stringify({access_token: res.accessToken}, null, 2)], {type : 'application/json'});
    // axios
    //   .post('http://localhost:2000/auth/googletoken', 
    //     tokenBlob
    //   , {withCredentials: true, header: {'content-type': 'application/json'}})
    //   .then(response => {
    //     console.log('handlePublishWebsite response: ', response);
    //     if (response.status === 200) {
    //       // TODO: update session Data in builderSession
    //       console.log('succesfully publish your resume.');
    //     } else {
    //       console.log('Something went wrong while submitting: ', response);
    //     }
    //   })
    //   .catch(error => {
    //     console.log('handlePublishWebsite error: ', error, error.response);
    //   });

      const tokenBlob = new Blob([JSON.stringify({access_token: res.accessToken}, null, 2)], {type : 'application/json'});
        const options = {
            method: 'POST',
            body: tokenBlob,
            mode: 'cors',
            cache: 'default'
        };
        fetch('http://localhost:2000/auth/googletoken', options).then(r => {
            const token = r.headers.get('x-auth-token');
            console.log("res", r)
        })


  };
  const responseGoogle1 = response => {
    console.log(
      'google data1:',
      JSON.stringify({ access_token: response.accessToken }, null, 2),
    );
  };
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
                  <GoogleLogin
                    clientId="901701543566-5gnuj2hbhas5t6gt5l60a8e2odamokhm.apps.googleusercontent.com"
                    render={renderProps => (
                      <button
                        className="btn btn-danger"
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                      >
                        Google
                      </button>
                    )}
                    // redirectUri="postmessage"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle1}
                    className="btn btn-outline-danger"
                  />
                  <a
                    href="http://localhost:2000/auth/google"
                    className="bg-white rounded-full p-1 mr-2"
                  >
                    <FaGoogle />
                  </a>
                  <a
                    href="http://localhost:2000/auth/google"
                    className="bg-white rounded-full p-1 mr-2"
                  >
                    <FaLinkedin />
                  </a>

                  <a
                    href="http://localhost:2000/auth/github"
                    className="bg-white rounded-full p-1"
                  >
                    <FaGithub />
                  </a>
                  <button
                    type="button"
                    className="bg-white rounded-full p-1 mr-2"
                  >
                    <FaGoogle />
                  </button>
                  <button
                    type="button"
                    className="bg-white rounded-full p-1 mr-2"
                  >
                    <FaLinkedin />
                  </button>

                  <button type="button" className="bg-white rounded-full p-1">
                    <FaGithub />
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
